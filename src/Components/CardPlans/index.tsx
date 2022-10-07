import React from 'react';
import {
    CardPlansContainerDiv,
    CardPlansContentDiv,
    CardPlansTitleH3,
    CardPlansContainerPriceDiv,
    CardPlansParagraphP,
    CardPlansButton
} from './style'

interface CardPlansProps {
    Title: string;
    Paragraph: string;
    Price: number;
    BackgroundColor: string;
    TitleAndPriceColor: string;
    ParagraphColor: string;
}

const CardPlans: React.FC<CardPlansProps> = ({ Title, Paragraph, Price, BackgroundColor, TitleAndPriceColor, ParagraphColor }) => {
    return (
        <>
            <CardPlansContainerDiv BackgroundColor={BackgroundColor} >
                <CardPlansContentDiv>
                    <CardPlansTitleH3 TitleAndPriceColor={TitleAndPriceColor}>{Title}</CardPlansTitleH3>
                    <CardPlansContainerPriceDiv TitleAndPriceColor={TitleAndPriceColor}>
                        <span>R$</span>
                        <span>{Price}</span>
                        <span>/mês</span>
                    </CardPlansContainerPriceDiv>
                    <CardPlansParagraphP ParagraphColor={ParagraphColor}>
                        {Paragraph}
                    </CardPlansParagraphP>
                    <CardPlansButton>Assinar</CardPlansButton>
                </CardPlansContentDiv>
            </CardPlansContainerDiv>
        </>
    );
}

export default CardPlans;