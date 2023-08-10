import { styled } from "styled-components";
import { device } from "constants";
import gooseImage from "assets/images/registerform-desk-1x.png";
import gooseImageRetina from "assets/images/registerform-desk@2x.png";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.blue2Color};

  @media screen and (min-width: ${device.desktop}px) {
    position: relative;
  }
`;

export const BgImage = styled.div`
  display: none;
  @media screen and (min-width: ${device.desktop}px) {
    position: absolute;
    left: 50px;
    bottom: 0;
    display: block;
    width: 400px;
    height: 416px;
    background-image: url(${gooseImage});

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${gooseImageRetina});
      background-size: contain;
    }
  };
`;