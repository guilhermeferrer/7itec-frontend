import React, { useState, forwardRef, Ref, useImperativeHandle } from 'react';
import { IoIosEye, IoIosClose, IoIosCheckmark, IoIosAdd, IoIosRemove, IoIosCreate } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Card, Option, ActionText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { finishOrder, deleteOrder } from '../../store/modules/order/action';

import useResize from '@realdennis/use-resize';
const SwipeableBottomSheet = require('react-swipeable-bottom-sheet') as React.FC<any>;

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

interface BottomSheetRef {
    open: (order: IOrder) => void;
    close: () => void;
}

const BottomSheet = forwardRef((_, ref: Ref<BottomSheetRef>) => {
    const [open, setOpen] = useState<boolean>();
    const [order, setOrder] = useState<IOrder>();
    const user = useSelector(({ auth }: IUserState) => auth.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { width } = useResize();

    useImperativeHandle(ref, () => ({
        open(order: IOrder) {
            setOpen(true);
            setOrder(order);
        },
        close() {
            setOpen(false);
        }
    }));

    function goBack() {
        setOpen(false);
    }

    function goToOrderDetais() {
        if (!order)
            return;

        if (width >= 1024)
            return history.push({
                pathname: '/',
                search: '?modal=true&type=order-details',
                state: { order }
            });

        history.push('/order-details', { order });
    }

    function goToDeliveryManList() {

        if (!order)
            return;

        if (width >= 1024)
            return history.push({
                pathname: '/',
                search: '?modal=true&type=delivery-man-list',
                state: { order_id: order._id }
            });

        history.push('/delivery-man-list', { order_id: order._id });
    }

    function handleFinishOrder() {
        if (order)
            dispatch(finishOrder(order._id));
    }

    function handleDeleteOrder() {
        if (order)
            dispatch(deleteOrder(order._id));
    }

    function goToEditOrderPage() {
        if (!order)
            return;

        if (width >= 1024)
            return history.push({
                pathname: '/',
                search: '?modal=true&type=new-order',
                state: { order }
            });

        history.push('/new-order', { order });
    }

    return (
        <SwipeableBottomSheet
            open={open}
            onChange={setOpen}
            style={{ zIndex: 1000 }}
        >
            <Card>
                <Option onClick={goToOrderDetais}>
                    <IoIosEye size={18} />
                    <ActionText>Ver detalhes</ActionText>
                </Option>

                {
                    (!user.admin && !user.chooser) &&
                    <Option onClick={handleFinishOrder}>
                        <IoIosCheckmark size={26} />
                        <ActionText>Finalizar</ActionText>
                    </Option>
                }
                {
                    (user.admin || user.chooser) &&
                    <Option onClick={goToDeliveryManList}>
                        <IoIosAdd size={22} />
                        <ActionText>Vincular entregador</ActionText>
                    </Option>
                }
                {
                    (user.admin) &&
                    <>
                        <Option onClick={goToEditOrderPage}>
                            <IoIosCreate size={22} />
                            <ActionText>Editar</ActionText>
                        </Option>
                        <Option onClick={handleDeleteOrder}>
                            <IoIosRemove size={22} />
                            <ActionText>Excluir</ActionText>
                        </Option>
                    </>
                }
                <Option onClick={goBack}>
                    <IoIosClose size={22} />
                    <ActionText>Fechar</ActionText>
                </Option>
            </Card>
        </SwipeableBottomSheet>
    )
});

export default BottomSheet;