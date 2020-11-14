import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Montserrat';
    }
    body, html, #root {
        width: 100%;
        background-color: #f7f9ff;
    }
    .rodal, .rodal-mask {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed !important;
        padding: 10px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .rodal-dialog {
        display: flex;
        margin: auto;
        height: auto !important;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        background-color: #fff;
        font-family: inherit;
        font-size: 1rem;
        padding: 1.25em;
        border-radius: 0.3125em;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative !important;
        width: 32em;
        max-width: 100%;
    }
`;