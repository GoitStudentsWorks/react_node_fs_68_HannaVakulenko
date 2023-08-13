import styled from 'styled-components';
import { device } from 'constants';

export const StyledFeedbackBtn = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;

  border-radius: 10px;
  background: #3e85f3;
  
  @media (min-width: ${device.tablet}px) {
    padding: 12px 32px;
    border-radius: 14px;
  }
`;

export const FeedBackBtnText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 133.333%;
  
  @media (min-width: ${device.tablet}px) {
    font-size: 14px;
    line-height: 128.571%;
  }
`;
