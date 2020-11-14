import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

interface IBackButton {
    leftSpace: boolean;
}

export const Container = styled.div`
    flex-direction: row;
    height: 50px;
    padding: 0 5px;
    align-items: center;
    elevation: 1;
    background-color: #37479e;
    justify-content: space-between;
    display: flex;
`;

export const Left = styled.div`
    align-items: center;
    display: flex;
`;

export const BackButton = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ leftSpace }: IBackButton) => leftSpace ? 10 : 0}px;
    cursor: pointer;
`;

export const BackIcon = styled(IoIosArrowBack)`
    color: white;
    font-size: 22px;
`;

export const Title = styled.h1`
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: white;
`;

export const ActionButton = styled.div`
    padding: 10px 15px;
    cursor: pointer;
`;

export const ActionText = styled.span`
    color: white;
`;


export const Spacer = styled.div`
    width: 30px;
`;