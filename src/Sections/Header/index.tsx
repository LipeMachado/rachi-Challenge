import React from 'react';
import {
    HeaderContainerDiv,
    HeaderTextDiv,
    HeaderTextH1,
    HeaderButtonRegisterDiv,
    HeaderRegisterButton,
    HeaderImageImg
} from './style'

import imageHeader from '../../Assets/imageHeader.svg'

const Header: React.FC = () => {
    return (
        <>
            <HeaderContainerDiv>
                <HeaderTextDiv>
                    <HeaderTextH1>
                        Rachi, <br />
                        é tudo que você <br />
                        precisa em um só lugar.
                    </HeaderTextH1>
                    <HeaderButtonRegisterDiv>
                        <HeaderRegisterButton>
                            Cadastrar-se
                        </HeaderRegisterButton>
                    </HeaderButtonRegisterDiv>
                </HeaderTextDiv>
                <div>
                    <HeaderImageImg src={imageHeader} alt="" />
                </div>
            </HeaderContainerDiv>
        </>
    );
}

export default Header;