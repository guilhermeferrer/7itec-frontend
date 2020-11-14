import React, { useEffect, useState } from 'react';
import { Container, Content, Label, Input, Button, ButtonText, Logo, Form, Title, LogoBox, Line, Fill } from './styles';
import Spinner from "react-spinners/PulseLoader";

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/modules/auth/action';
import boxIcon from '../../images/box.png';

interface AuthState {
    auth: {
        loading: boolean;
    }
}

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const loading = useSelector(({ auth }: AuthState) => auth.loading);

    const dispatch = useDispatch();

    function handleLogin() {
        dispatch(login(email, password));
    }

    return (
        <Container>
            <Content>
                <LogoBox>
                    <Fill />
                    <Logo src={boxIcon} alt='logo' />
                    <Line />
                </LogoBox>
                <Form>
                    <Title>Login</Title>
                    <Label>Email</Label>
                    <Input onChange={e => setEmail(e.target.value)} autoCapitalize='none' />
                    <Label>Senha</Label>
                    <Input type='password' onChange={e => setPassword(e.target.value)} />
                    <Button onClick={handleLogin}>
                        {
                            loading
                                ? <Spinner loading={true} size={4} color={'white'} />
                                : <ButtonText>Entrar</ButtonText>
                        }
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Login;