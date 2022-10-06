import React from 'react';
import {
    HowItWorksContainerDiv,
    HowItWorksTitleH1,
    HowItWorksItensContainerDiv
} from './style'

import howItWorksCreateConections from '../../Assets/howItWorksCreateConections.svg'
import howItWorksFree from '../../Assets/howItWorksFree.svg'
import howItWorksShare from '../../Assets/howItWorksShare.svg'

const HowItWorks: React.FC = () => {
    return (
        <>
            <HowItWorksContainerDiv>
                <HowItWorksTitleH1>Como Funciona</HowItWorksTitleH1>
                <HowItWorksItensContainerDiv>
                    <div>
                        <img src={howItWorksCreateConections} />
                        <h3>Crie conexões</h3>
                        <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                    </div>

                    <div>
                        <img src={howItWorksFree} />
                        <h3>100% gratuito</h3>
                        <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                    </div>

                    <div>
                        <img src={howItWorksShare} />
                        <h3>Compartilhamento</h3>
                        <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                    </div>
                </HowItWorksItensContainerDiv>
            </HowItWorksContainerDiv>
        </>
    );
}

export default HowItWorks;