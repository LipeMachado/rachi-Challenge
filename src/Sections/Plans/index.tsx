import React from 'react';
import CardPlans from '../../Components/CardPlans';
import {
    PlansContainerDiv,
    PlansTextContentDiv,
    PlansTitleH1,
    PlansParagraphP,
    PlansContainerCardsDiv
} from './style'

const Plans: React.FC = () => {
    return (
        <>
            <PlansContainerDiv>
                <PlansTextContentDiv>
                    <PlansTitleH1>Nossos Planos</PlansTitleH1>
                    <PlansParagraphP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec lacinia mi quis euismod ultrices.
                    </PlansParagraphP>
                </PlansTextContentDiv>
                <PlansContainerCardsDiv>
                    <CardPlans
                        Title="Bronze"
                        Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
                        Price={28}
                        BackgroundColor="--white200"
                        TitleAndPriceColor="--gray200"
                        ParagraphColor="--gray200"
                    />
                    <CardPlans
                        Title="Prata"
                        Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
                        Price={57}
                        BackgroundColor="--gray200"
                        TitleAndPriceColor="--white"
                        ParagraphColor="--white"
                    />
                    <CardPlans
                        Title="Ouro"
                        Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
                        Price={94}
                        BackgroundColor="--white200"
                        TitleAndPriceColor="--gray200"
                        ParagraphColor="--gray200"
                    />
                </PlansContainerCardsDiv>
            </PlansContainerDiv>
        </>
    );
}

export default Plans;