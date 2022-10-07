import styled from 'styled-components';

export const DownloadAppContainerDiv = styled.div`
    height: 70vh;
    background-color: var(--white200);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10%;
`;

export const DownloadAppTextContentDiv = styled.div`
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const DownloadAppTitleH1 = styled.h1`
    margin-top: 40px;
    font-size: 25px;
    font-family: var(--font-sora);

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`;

export const DownloadAppParagraphP = styled.p`
    width: 60%;
    margin-top: 30px;
    font-size: 16px;
    line-height: 25px;
    color: var(--gray);

    @media screen and (max-width: 768px){
        width: 100%;
        font-size: 14px;
    }
`;

export const DownloadAppLinksDiv = styled.div`
    margin-top: 35px;
`;

export const DownloadAppGooglePlayImg = styled.img`
    margin-right: 25px;

    @media screen and (max-width: 768px){
        width: 150px;
    }

    @media screen and (max-width: 430px){
        width: 100px;
    }
`;

export const DownloadAppAppStoreImg = styled.img`
    @media screen and (max-width: 768px){
        width: 150px;
    }

    @media screen and (max-width: 430px){
        width: 100px;
    }
`;

export const DownloadAppImageDiv = styled.div`
    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const DownloadAppImageImg = styled.img`
    width: 400px;

    @media screen and (max-width: 1115px){
        width: 300px;
    }
`;