import styled from 'styled-components';

export const HeaderContainerDiv = styled.div`
    height: 90vh;
    background-color: var(--white200);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-between;
        height: 80vh;
    }
`;

export const HeaderTextDiv = styled.div`
    width: 400px;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 30px;
    }
`;

export const HeaderTextH1 = styled.h1`
    font-family: var(--font-sora);
    font-size: 48px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`;

export const HeaderButtonRegisterDiv = styled.div`
    margin-top: 40px;
`;

export const HeaderRegisterButton = styled.button`
    background-color: var(--blue);
    border: none;
    color: var(--white);
    border-radius: 50px;
    padding: 10px 26px 10px 26px;
    font-family: var(--font-sora);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--blueHover);
    }
`;

export const HeaderImageImg = styled.img`
    width: 30rem;

    @media screen and (max-width: 1115px){
        width: 22rem;
    }

    @media screen and (max-width: 460px){
        width: 100%;
    }
`;