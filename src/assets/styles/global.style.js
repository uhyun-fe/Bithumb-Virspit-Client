import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --main: #F69420;
        --lightgray: #f2f2f2;
        --darkgray: #afafaf;
        --black: #333333;
        --white: #ffffff;
        --sixgray: #666666;
        --ninegray: #999999;

        --en: 'Russo One', sans-serif;
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
        font-family: 'GmarketSans', sans-serif;
    }

    input,
    button {
        font-family: inherit;
        color: var(--black);
        font-size: 1.2em;
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    img {
        width: 100%;
    }
`;
