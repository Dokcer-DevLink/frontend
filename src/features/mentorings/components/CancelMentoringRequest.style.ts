import styled from 'styled-components';

export const RequestState = styled.span`
  margin: 0 0 0 auto;
  border-radius: 10px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.primary};
  color: ${(props) => props.theme.schemes.light.onPrimary};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;

  white-space: nowrap;
`;
