import React from 'react';

import { Container } from './styles';

const Rodal: any = require('rodal');

const PageModal: React.FC = () => {
    return (
        <Rodal visible={true}>
            testee
        </Rodal>
    );
}

export default PageModal;