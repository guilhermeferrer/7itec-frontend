import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #f7f9ff;
`;

export const Scroll = styled.div`
`;

export const FloatingAddButton = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    border-radius: 28px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 1px -2px rgba(0, 0, 0, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
`;

export const Warning = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WarningText = styled.span`
`;