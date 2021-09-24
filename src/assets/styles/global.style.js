import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --main: #FE9601;
        --lightmain: #FFF8F0;
        --lightgray: #f2f2f2;
        --middlegray: #d2d2d2;
        --darkgray: #afafaf;
        --black: #333333;
        --white: #ffffff;
        --sixgray: #666666;
        --ninegray: #999999;
        --red: #ff0000;
        --green: #268617;

        --en: 'Russo One', sans-serif;
        --ko: 'GmarketSans', sans-serif;
    }

    /* font */
    @font-face {
        font-family: 'GmarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
    }

    html,
    body,
    #root {
        background: var(--white);
    }

    #root {
        padding: 30px 5%;
        min-width: 375px;
        font-family: var(--ko);
    }

    a {
        text-decoration: none;
    }

    input,
    button {
        font-family: inherit;
        color: var(--black);
        font-size: 1.2em;
        border: none;
        outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input[type="checkbox"],
    input[type="radio"] {
        -webkit-appearance: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 15px;
        height: 15px;
        border: 1px solid var(--darkgray);
        border-radius: 50%;
        background:var(--white);
        &:checked {
            border-color: var(--main);
            background: var(--main);
        }
    }

    input[type="checkbox"] {
        position: relative;
        top: -1px;
        border-radius: 0;
    }

    button {
        cursor: pointer;
    }

    img {
        width: 100%;
    }
`;
