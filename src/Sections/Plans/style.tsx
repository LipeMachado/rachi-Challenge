import styled from 'styled-components';

export const PlansContainerDiv = styled.div`
    height: 100vh;
    background-color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
`;

export const PlansTextContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const PlansTitleH1 = styled.h1`
    margin-top: 40px;
    font-size: 25px;
    font-family: var(--font-sora);

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`;

export const PlansParagraphP = styled.p`
    margin-top: 20px;
    text-align: center;
    width: 520px;
`;

export const PlansContainerCardsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    gap: 20px;
`;