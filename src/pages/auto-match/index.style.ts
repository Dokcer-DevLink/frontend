import styled from 'styled-components';

export const Waitting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WaittingText = styled.span`
  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;
