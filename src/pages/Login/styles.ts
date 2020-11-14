import styled from 'styled-components';
import banner from '../../images/banner.jpg';

export const Container = styled.div`
    @media(min-width: 1024px){
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${banner});
        background-color: rgba(0, 0, 0, .4);
        position: relative;
        background-size: cover;

        &:before{
            background-color: rgba(0, 0, 0, .4);
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            width: 100%;
        }
    }
`;

export const Content = styled.div`
    flex: 1;    
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: hidden;

    @media(min-width: 1024px){
        max-width: 500px;
        margin: 0 auto;
        justify-content: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
        padding-bottom: 30px;
        overflow: hidden;
        position: relative;
        border-radius: 3px;
    }
`;

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Fill = styled.div`
    background-color: #37479e;
    height: 180px;
`;

export const Line = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 500px 50px 0;
    border-color: transparent  #37479e transparent transparent;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    align-self: center;
    position: absolute;
    top: 50px;
    z-index: 100;
`;

export const Form = styled.div`
    padding: 0 25px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 32px;
`;

export const Label = styled.label`
    color: black;
    margin-top: 10px;
`;

export const Input = styled.input`
    background-color: white;
    height: 45px;
    border: 1px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 10px;
`;

export const Button = styled.div`
    height: 45px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 15px;
    display: flex;
    cursor: pointer;
`;

export const ButtonText = styled.label`
    color: white;
`;