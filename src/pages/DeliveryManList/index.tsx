import React, { useState, useEffect } from 'react';
import Spinner from "react-spinners/PulseLoader";
import { History } from 'history';
import { confirmAlert } from 'react-confirm-alert';

import TitleBar from '../../components/TitleBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../.././store/modules/user/action';
import { updateDeliveryMan } from '../.././store/modules/order/action';

import { Container, Scroll, Ripple, DeliveryManCard, Name, Button, ButtonLabel, Warning, WarningText } from './styles';

interface IUserState {
    user: {
        users: User[];
        loading: boolean;
    }
}

interface User {
    _id: string;
    name: string;
}

interface DeliveryManListProps {
    history: History;
    location: {
        state: {
            order_id: string;
        }
    }
}

const DeliveryManList: React.FC<DeliveryManListProps> = ({ location }) => {

    const { order_id } = location.state;
    const [activeDeliveryMan, setActive] = useState<string>('');
    const dispatch = useDispatch();

    const users = useSelector(({ user }: IUserState) => user.users);
    const loading = useSelector(({ user }: IUserState) => user.loading);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    function handleUpdateDeliveryMan() {
        dispatch(updateDeliveryMan(activeDeliveryMan, order_id));
    }

    return (
        <>
            <TitleBar title='Escolher entregador' backButton />
            <Container>
                {
                    loading ?
                        <Warning>
                            <Spinner loading={true} size={4} color={'white'} />
                        </Warning>
                        :
                        users.length > 0
                            ?
                            <Scroll>
                                {
                                    users.map((user, index) =>
                                        <Ripple
                                            key={index}
                                            onClick={() => setActive(user._id)}
                                        >
                                            <DeliveryManCard active={activeDeliveryMan === user._id}>
                                                <Name>{user.name}</Name>
                                            </DeliveryManCard>
                                        </Ripple>
                                    )
                                }
                            </Scroll>
                            :
                            <Warning>
                                <WarningText>Nenhum entregador disponível</WarningText>
                            </Warning>
                }
                <Button onClick={handleUpdateDeliveryMan}>
                    <ButtonLabel>Vincular</ButtonLabel>
                </Button>
            </Container>
        </>
    )
};

export default DeliveryManList;