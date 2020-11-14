import styled from 'styled-components';
import { IoIosCheckmark, IoIosRedo } from 'react-icons/io';

interface ColorStyle {
    finished: boolean;
}

export const Container = styled.div`
    flex: 1;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const DateTitle = styled.span`
    color: #353734;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media(min-width: 1024px){
        flex-direction: row;
        flex-wrap: wrap;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Order = styled.div`
    flex-direction: row;
    display: flex;
    cursor: pointer;

    @media(min-width: 1024px){
        width: 30%;
    }
`;

export const OrderTime = styled.div`
    flex-direction: row;
    align-items: center;
    display: flex;
    margin-right: 15px;
    position: relative;

    @media(min-width: 1024px){
        display: none;
    }
`;

export const OrderTimeDesktop = styled(OrderTime)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    margin-top: 10px;
    position: relative;
    display: none;

    @media(min-width: 1024px){
        display: flex;
    }
`;

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    margin-right: 5px;
`;

export const Time = styled.span`
`;

export const Line = styled.div`
    width: 1px;
    height: 83px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    left: 4px;
    position: absolute;
    top: 62%;

    
    @media(min-width: 1024px){
       display: none;
    }
`;

export const OrderCard = styled.div`
    background-color: white;
    flex: 1;
    height: 80px;
    border-radius: 5px;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0px 1px 1px -2px rgba(0, 0, 0, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DoneIcon = styled(IoIosCheckmark)`
    color: white;
    font-size: 25px;
`;

export const InDeliveryIcon = styled(IoIosRedo)`
    color: white;
    font-size: 18px;
`;
export const OrderCardInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`;

export const ClientName = styled.span`
`;

export const Address = styled.span`
    font-size: 12px;
`;