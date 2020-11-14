import React, { useRef } from 'react';
import { format, addHours } from 'date-fns';
import { useHistory } from 'react-router-dom';
import BottomSheet from '../../components/BottomSheet';

import { Container, DateTitle, OrdersContainer, Order, OrderTime, OrderTimeDesktop, Circle, Time, Line, OrderCard, IconContainer, DoneIcon, InDeliveryIcon, OrderCardInfo, ClientName, Address } from './styles';

interface IOrder {
    _id: string;
    recipient: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    createdAt: Date;
    updatedAt: Date;
    deliveredAt: Date | undefined;
}

interface IOrdersGroupByDate {
    orders: IOrder[];
    date: string;
}

interface DayContainer {
    order: IOrdersGroupByDate;
}

interface BottomSheetRef {
    open: (order: IOrder) => void;
    close: () => void;
}

const DayContainer: React.FC<DayContainer> = ({ order }) => {
    const history = useHistory();
    const bottomSheetRef = useRef<BottomSheetRef>(null);

    const openOptionsMenu = (order: IOrder) => () => {
        console.log(bottomSheetRef);
        if (bottomSheetRef && bottomSheetRef.current)
            bottomSheetRef.current.open(order);
    }

    const isFinished = (date: Date | undefined) => date ? true : false;

    const formatDate = (isoDate: Date, dateFormat = 'HH:mm') => format(new Date(isoDate), dateFormat);

    return (
        <Container>
            <DateTitle>{formatDate(addHours(new Date(order.date), 3), 'dd, MMM - yyyy')}</DateTitle>
            <OrdersContainer>
                {
                    order.orders.map((order, index, array) => ((
                        <Order key={index}>
                            <OrderTime>
                                <Circle finished={isFinished(order.deliveredAt)} />
                                <Time>{formatDate(order.createdAt)}</Time>
                                {
                                    index !== array.length - 1 &&
                                    <Line finished={isFinished(order.deliveredAt)} />
                                }
                            </OrderTime>
                            <OrderCard onClick={openOptionsMenu(order)}>
                                <IconContainer finished={isFinished(order.deliveredAt)}>
                                    {isFinished(order.deliveredAt) ? <DoneIcon /> : <InDeliveryIcon />}
                                </IconContainer>
                                <OrderCardInfo>
                                    <ClientName>{order.recipient}</ClientName>
                                    <Address>{order.street} - {order.number}, {order.city} / {order.state}</Address>
                                    <OrderTimeDesktop>
                                        <Circle finished={isFinished(order.deliveredAt)} />
                                        <Time>{formatDate(order.createdAt)}</Time>
                                    </OrderTimeDesktop>
                                </OrderCardInfo>
                            </OrderCard>
                        </Order>
                    )))
                }
            </OrdersContainer>
            <BottomSheet ref={bottomSheetRef} />
        </Container>
    );
}

export default DayContainer;