import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #0F9AFE;
        --blueHover: #3aadfe;
        --white: #ffffff;
        --white200: #EFF8FF;
        --white400: #EFF8FF;
        --gray: #6E7275;
        --grayLight: #DBDBDB;
        --gray200: #293145;
        --gray200Opacity: #293145b8;
        --font-sora: 'Sora', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-sora);
        scroll-behavior: smooth;
    }
`;