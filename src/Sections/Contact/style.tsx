import styled from 'styled-components';

import BackgroundContact from '../../Assets/backgroundContact.png'

export const ContactContainerDiv = styled.div`
    height: 50vh;
    background-image: url(${BackgroundContact});
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: -999;
`;

export const ContactContainerColorDiv = styled.div`
    background-color: var(--gray200Opacity);
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContactTitleH1 = styled.h1`
    color: var(--white);
    font-weight: 600;
    font-family: var(--font-sora);
`;

export const ContactParagraphP = styled.p`
    font-weight: 400;
    text-align: center;
    color: var(--grayLight);
    margin-top: 15px;
    width: 500px;

    @media screen and (max-width: 660px){
        width: 100%;
    }
`;

export const ContactContainerEmailDiv = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }

    input {
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--white);
        margin-right: 50px;
        color: var(--white);
        padding: 0 1%;
        font-size: 15px;

        &::placeholder {
            color: var(--white);
        }

        textarea:focus, &:focus, select:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        @media screen and (max-width: 480px){
            width: 100%;
            margin-right: 0;
            margin-bottom: 50px;
        }
    }

    button {
        background: var(--blue);
        border-radius: 50px;
        color: var(--white);
        padding: 8px 32px 8px 32px;
        border: none;
        box-shadow: 1px 3px 4px rgb(19 125 224 / 50%);
        font-weight: 500;
        font-size: 15px;

        @media screen and (max-width: 480px){
            width: 100%;
        }
    }
`; 