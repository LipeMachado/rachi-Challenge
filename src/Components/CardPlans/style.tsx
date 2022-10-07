import styled from 'styled-components';

export const CardPlansContainerDiv = styled.div <{ BackgroundColor: string }> `
    background-color: var(${props => props.BackgroundColor});
    padding: 2rem;
    text-align: center;
    width: 280px;
    border-radius: 8px;
`;

export const CardPlansContentDiv = styled.div`
    font-family: var(--font-sora);
`;

export const CardPlansTitleH3 = styled.h3<{ TitleAndPriceColor: string }>`
    font-size: 23px;
    margin-bottom: 40px;
    color: var(${props => props.TitleAndPriceColor});
`;

export const CardPlansContainerPriceDiv = styled.div<{ TitleAndPriceColor: string }>`
    max-width: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(${props => props.TitleAndPriceColor});

    span:nth-child(1){
        font-size: 17px;
        position: absolute;
        right: 80px;
        left: 0;
        font-weight: 700;
    }

    span:nth-child(2){
        font-size: 40px;
        font-weight: 700;
    }

    span:nth-child(3){
        position: absolute;
        bottom: 8px;
        font-size: 16px;
        font-weight: 700;
    }
`;

export const CardPlansParagraphP = styled.p<{ ParagraphColor: string }>`
    margin-top: 40px;
    font-size: 14px;
    color: var(${props => props.ParagraphColor});
`;

export const CardPlansButton = styled.button`
    margin-top: 50px;
    border: none;
    padding: 10px 60px;
    font-weight: 700;
    font-size: 13px;
    color: var(--white);
    background: var(--blue);
    box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
    border-radius: 50px;
`;