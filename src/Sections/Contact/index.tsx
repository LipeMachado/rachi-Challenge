import React from 'react';
import {
    ContactContainerDiv,
    ContactContainerColorDiv,
    ContactTitleH1,
    ContactParagraphP,
    ContactContainerEmailDiv
} from './style';


const Contact: React.FC = () => {
    return (
        <>
            <ContactContainerDiv>
                <ContactContainerColorDiv>
                    <ContactTitleH1>Contato</ContactTitleH1>
                    <ContactParagraphP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</ContactParagraphP>
                    <ContactContainerEmailDiv>
                        <input type="email" placeholder="Seu melhor e-mail" />
                        <button>Enviar</button>
                    </ContactContainerEmailDiv>
                </ContactContainerColorDiv>
            </ContactContainerDiv>
        </>
    );
}

export default Contact;