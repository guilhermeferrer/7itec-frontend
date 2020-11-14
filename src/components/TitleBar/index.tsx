import React from 'react';

import { Container, BackButton, BackIcon, Title, Left, ActionButton, ActionText } from './styles';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules/auth/action';

interface ITitleBar {
    backButton?: boolean;
    title: string;
}

const TitleBar: React.FC<ITitleBar> = ({ backButton, title }) => {
    const { goBack } = useHistory();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <Container>
            <Left>
                {
                    backButton &&
                    <BackButton
                        onClick={() => goBack()}
                        leftSpace={!backButton}
                    >
                        <BackIcon />
                    </BackButton>

                }
                <Title>{title}</Title>
            </Left>
            {
                !backButton &&
                <ActionButton onClick={handleLogout}>
                    <ActionText>Sair</ActionText>
                </ActionButton>
            }
        </Container>
    );
}

export default TitleBar;