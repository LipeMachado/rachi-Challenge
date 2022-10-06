import styled from 'styled-components';

export const HowItWorksContainerDiv = styled.div`
    height: 70vh;
    background-color: var(--white);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10%;
`;

export const HowItWorksTitleH1 = styled.h1`
    margin-top: 40px;
    font-size: 40px;
    font-family: var(--font-sora);

    @media screen and (max-width: 768px){
        font-size: 30px;
    }
`;

export const HowItWorksItensContainerDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    padding: 10px;

    div {
        padding: 0 20px;
    }

    img {
        margin-bottom: 30px;
    }

    h3 {
        margin-bottom: 10px;
        font-family: var(--font-sora);
        color: var(--gray200);
    }

    p {
        width: 300px;
        font-family: var(--font-sora);
        color: var(--gray);
    }

    @media screen and (max-width: 1100px){
        padding: 0;

        div {
            padding: 0 0;
        }

        img {
            width: 40px;
        }

        h3 {
            font-size: 15px;
            font-family: var(--font-sora);
            color: var(--gray200);
        }

        p {
            width: 100%;
            font-size: 12px;
            font-family: var(--font-sora);
            color: var(--gray);
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 50px;

        div {
            margin-bottom: 60px;
        }
    }
`;