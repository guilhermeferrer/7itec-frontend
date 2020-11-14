import styled from 'styled-components';

interface InputStyle {
    width?: string;
}

export const Container = styled.div`
    flex: 1;
    background-color: #f7f9ff;
    width: 100%;

    @media(min-width: 1024px){
        padding-bottom: 15px;
    }
`;

export const Scroll = styled.div`
    padding: 15px;

    @media(min-width: 1024px){
        max-height: 80vh;
        overflow-y: scroll;
    }

`;

export const InputGroup = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: ${({ width }: InputStyle) => width ?? 'auto'};
`;

export const MultiLineInput = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

export const Gap = styled.div`
    width: 15px;
`;

export const Label = styled.label``;

export const Input = styled.input`
    background-color: white;
    height: 45px;
    border: 1px;
    border-color: rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
`;

export const Button = styled.div`
    display: flex;
    height: 45px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 30px;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    color: white;
`;