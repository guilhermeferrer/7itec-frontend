import React, { useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Spinner from "react-spinners/PulseLoader";
import { History } from 'history';

import { Container, Scroll, FloatingAddButton, Warning, WarningText } from './styles';

import DayContainer from '../../components/DayContainer';
import TitleBar from '../../components/TitleBar';

import { getAllOrders, getDeliveryManOrders } from '../../store/modules/order/action';
import { useDispatch, useSelector } from 'react-redux';
import useResize from '@realdennis/use-resize';

interface IUserState {
    auth: {
        user: {
            _id: string;
            chooser: boolean;
            admin?: boolean;
        }
    }
}

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

interface IOrderState {
    order: {
        orders: IOrdersGroupByDate[];
        loading: boolean;
    }
}

interface HomeProps {
    history: History;
}

const Home: React.FC<HomeProps> = ({ history }) => {
    const user = useSelector(({ auth }: IUserState) => auth.user);
    const orders = useSelector(({ order }: IOrderState) => order.orders);
    const loading = useSelector(({ order }: IOrderState) => order.loading);
    const dispatch = useDispatch();
    const { width } = useResize();

    console.log(orders);

    useEffect(() => {
        if (user.chooser || user.admin)
            dispatch(getAllOrders());
        else
            dispatch(getDeliveryManOrders(user._id));
    }, []);

    function handleOpenNewOrder() {
        if (width >= 1024)
            return history.push({
                pathname: '/',
                search: '?modal=true&type=new-order'
            })
        return history.push('/new-order')
    }

    return (
        <Container>
            <TitleBar title='Minhas entregas' />
            {
                loading ?
                    <Warning>
                        <Spinner loading={true} size={4} color={'white'} />
                    </Warning>
                    :
                    orders.length > 0
                        ?
                        <Scroll>
                            {
                                orders.map((order, index) => (
                                    <DayContainer key={index} order={order} />
                                ))
                            }
                        </Scroll>
                        :
                        <Warning>
                            <WarningText>Nenhuma entrega disponível</WarningText>
                        </Warning>
            }
            {
                (user.admin || user.chooser) &&
                <FloatingAddButton
                    onClick={handleOpenNewOrder}
                >
                    <IoIosAdd color='white' size={25} />
                </FloatingAddButton>
            }
        </Container>
    )
}

export default Home;