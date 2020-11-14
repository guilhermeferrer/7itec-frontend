import React, { useEffect, useState } from 'react';
import usePortal from 'react-useportal';
import { History } from 'history';
import { Modal } from './styles';

import NewOrder from '../../pages/NewOrder';
import OrderDetails from '../../pages/OrderDetails';
import DeliveryManList from '../../pages/DeliveryManList';

interface ModalProps {
    history: History;
    location: {
        search: string;
        state: {
            order: IOrder;
            order_id: string;
        }
    };
}

interface IOrder {
    _id: string;
    recipient: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    createdAt: Date;
    updatedAt: Date;
    deliveredAt: Date | undefined;
    deliveryMan: string | undefined;
}

const ModalRoute: React.FC<ModalProps> = ({ location, history }) => {

    const params = new URLSearchParams(location.search);
    const [open, setOpen] = useState<boolean>(false);

    const { Portal } = usePortal({
        bindTo: document && document.getElementById('modal-root') || undefined
    });

    useEffect(() => {
        if (params.get('modal'))
            setOpen(true);
        else
            setOpen(false);
    }, [params]);

    function handleCloseModal() {
        history.push('/');
    }

    return (
        <Portal>
            <Modal
                visible={open}
            >
                <div className={`box-dialog`}>
                    {params.get('type') === 'new-order' && <NewOrder {...{ location }}/>}
                    {params.get('type') === 'order-details' && <OrderDetails {...{ history, location }} />}
                    {params.get('type') === 'delivery-man-list' && <DeliveryManList {...{ history, location }} />}
                </div>
                <div onClick={handleCloseModal} className={`background`} />
            </Modal>
        </Portal>
    )
}

export default ModalRoute;