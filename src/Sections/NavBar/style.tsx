import styled from 'styled-components';

export const NabBarContainerDiv = styled.div`
    background: var(--white);
    color: var(--gray200);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.1% 10%;

    @media screen and (min-width: 768px) and (max-width: 1023px){
        width: 100%;
        padding: 1.2% 5%;
    }
`;

export const NavBarBoxLogoImageDiv = styled.div`

`;

export const NavBarLogoImg = styled.img`
    width: 100px;
`;

export const NavBarLinksDiv = styled.div`
    
    ul {
        display: flex;
        align-items: center;

        li {
            color: var(--gray);
            list-style-type: none;
            margin-left: 60px;
        }
    }

    @media screen and (max-width: 767px){
        display: none;
    }
`;