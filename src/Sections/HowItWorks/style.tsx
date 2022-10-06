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
`;