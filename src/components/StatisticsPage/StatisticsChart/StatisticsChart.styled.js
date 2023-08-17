import styled from 'styled-components';

import { device } from 'constants';

import { ResponsiveContainer } from 'recharts';

export const ChartContainer = styled.div`
  width: 307px;
  height: 413px;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff;
  padding: 40px 14px 40px 14px;
  color: #343434;
  display: none;

  @media screen and (min-width: ${device.tablet}px) {
    width: 640px;
    height: 424px;
    border-radius: 29px;
    padding: 32px;
  }

  @media screen and (min-width: ${device.desktop}px) {
    width: 860px;
    height: 440px;
    padding: 40px;
  }
`;

export const ResponsiveContainerStyled = styled(ResponsiveContainer)`
  box-sizing: border-box;
`;

export const ContainerSecondWrapper = styled.div`
  width: 100%;
  height: 413px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerFirstWrapper = styled.div`
  width: calc(100% - 28px);
  height: calc(100% - 80px);
  background-color: pink;
`;
