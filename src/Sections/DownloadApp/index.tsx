import React from 'react';
import {
    DownloadAppContainerDiv,
    DownloadAppTitleH1,
    DownloadAppTextContentDiv,
    DownloadAppParagraphP,
    DownloadAppGooglePlayImg,
    DownloadAppAppStoreImg,
    DownloadAppLinksDiv,
    DownloadAppImageDiv,
    DownloadAppImageImg
} from './style'

import DownloadAppGooglePlay from '../../Assets/downloadAppGooglePlay.svg'
import DownloadAppAppStore from '../../Assets/downloadAppAppStore.svg'
import DownloadAppImage from '../../Assets/downloadAppImage.svg'

const DownloadApp: React.FC = () => {
    return (
        <>
            <DownloadAppContainerDiv>
                <DownloadAppTextContentDiv>
                    <DownloadAppTitleH1>Baixe nosso app para desfrutar mais!</DownloadAppTitleH1>
                    <DownloadAppParagraphP>
                        Amet in elementum nulla scelerisque dui, egestas at.
                        Elit consectetur turpis elementum amet vitae et etiam nec.
                        Varius volutpat hac adipiscing tincidunt pretium.
                    </DownloadAppParagraphP>
                    <DownloadAppLinksDiv>
                        <DownloadAppGooglePlayImg src={DownloadAppGooglePlay} />
                        <DownloadAppAppStoreImg src={DownloadAppAppStore} />
                    </DownloadAppLinksDiv>
                </DownloadAppTextContentDiv>
                <DownloadAppImageDiv>
                    <DownloadAppImageImg src={DownloadAppImage} />
                </DownloadAppImageDiv>
            </DownloadAppContainerDiv>
        </>
    );
}

export default DownloadApp;