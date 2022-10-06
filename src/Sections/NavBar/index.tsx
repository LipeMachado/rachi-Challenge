import React from 'react';
import {
    NabBarContainerDiv,
    NavBarBoxLogoImageDiv,
    NavBarLogoImg,
    NavBarLinksDiv
} from './style'

import logo from '../../Assets/logo.png'

const NavBar: React.FC = () => {
    return (
        <>
            <NabBarContainerDiv>
                <NavBarBoxLogoImageDiv>
                    <NavBarLogoImg src={logo} />
                </NavBarBoxLogoImageDiv>
                <NavBarLinksDiv>
                    <ul>
                        <li>Funcionalidades</li>
                        <li>App</li>
                        <li>Planos</li>
                        <li>Contato</li>
                    </ul>
                </NavBarLinksDiv>
            </NabBarContainerDiv>
        </>
    );
}

export default NavBar;