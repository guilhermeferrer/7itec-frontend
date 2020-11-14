import styled from 'styled-components';

interface DeliveryManCardStyle {
    active: boolean;
}

export const Container = styled.div`
    flex: 1;
    justify-content: flex-end;
    background-color: #f7f9ff;
    padding: 15px;
`;

export const Scroll = styled.div`
    @media(min-width: 1024px){
        max-height: 80vh;
        overflow-y: scroll;
    }
`;

export const Ripple = styled.div`
    margin-bottom: 15px;
`;

export const DeliveryManCard = styled.div`
    background-color: white;
    height: 45px;
    padding: 15px;
    border-width: 1px;
    border-radius: 3px;
    border: 1px solid ${({ active }: DeliveryManCardStyle) => active ? '#2d3873' : 'rgba(0, 0, 0, .1)'};
    justify-content: center;
    cursor: pointer;
`;

export const Name = styled.span`
`;

export const Button = styled.div`
    height: 45px;
    display: flex;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 5px;
    cursor: pointer;
`;

export const ButtonLabel = styled.label`
    color: white;
    pointer-events: none;
`;

export const Warning = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WarningText = styled.span`
`;