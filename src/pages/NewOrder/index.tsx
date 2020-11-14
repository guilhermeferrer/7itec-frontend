import React, { useEffect, useState } from 'react';

import { Container, Scroll, InputGroup, Label, Input, Button, ButtonText } from './styles';

import TitleBar from '../../components/TitleBar';

import { useDispatch } from 'react-redux';
import { createOrder, updateOrder } from '../../store/modules/order/action';

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
}

interface INewOrder {
    location?: {
        state: {
            order: IOrder;
        }
    }
}

const NewOrder: React.FC<INewOrder> = ({ location }) => {

    const dispatch = useDispatch();

    const [recipient, setRecipient] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [uf, setUf] = useState<string>('');

    console.log(location);

    const order = location && location.state && location.state.order;

    function handleOrder() {
        if (order)
            return dispatch(updateOrder({ recipient, street, number, neighborhood, postalCode, city, state: uf }, order._id));
        dispatch(createOrder({ recipient, street, number, neighborhood, postalCode, city, state: uf }));
    }

    useEffect(() => {
        fillFormField();
    }, []);

    function fillFormField() {
        if (!order)
            return;

        setRecipient(order.recipient);
        setStreet(order.street);
        setNumber(order.number);
        setNeighborhood(order.neighborhood);
        setPostalCode(order.postalCode);
        setCity(order.city);
        setUf(order.state);
    }

    return (
        <Container>
            <TitleBar backButton title={order ? 'Editar entrega' : 'Nova entrega'} />
            <Scroll>
                <InputGroup>
                    <Label>Cliente</Label>
                    <Input
                        onChange={e => setRecipient(e.target.value)}
                        autoCapitalize='words'
                        value={recipient}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Rua</Label>
                    <Input
                        onChange={e => setStreet(e.target.value)}
                        value={street}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Número</Label>
                    <Input
                        onChange={e => setNumber(e.target.value)}
                        type='number'
                        value={number}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Bairro</Label>
                    <Input
                        onChange={e => setNeighborhood(e.target.value)}
                        value={neighborhood}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Cidade</Label>
                    <Input
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Cep</Label>
                    <Input
                        onChange={e => setPostalCode(e.target.value)}
                        type='number'
                        value={postalCode}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Estado</Label>
                    <Input
                        onChange={e => setUf(e.target.value)}
                        value={uf}
                    />
                </InputGroup>
                <Button onClick={handleOrder}>
                    <ButtonText>{order ? 'Atualizar' : 'Cadastrar'}</ButtonText>
                </Button>
            </Scroll >
        </Container >
    )
}

export default NewOrder;