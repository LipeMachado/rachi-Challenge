import styled from 'styled-components';

export const HeaderContainerDiv = styled.div`
    height: 90vh;
    background-color: var(--white200);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
`;

export const HeaderTextDiv = styled.div`
    width: 400px;
`;

export const HeaderTextH1 = styled.h1`
    font-family: var(--font-sora);
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
`;

export const HeaderImageImg = styled.img`
    width: 30rem;
`;