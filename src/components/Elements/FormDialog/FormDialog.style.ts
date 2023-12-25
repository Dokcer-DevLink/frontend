import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  min-width: 300px;

  padding: 20px;
  border-radius: 15px;

  background-color: ${(props) => props.theme.schemes.light.background};
`;

export const TextBox = styled.div``;

export const Title = styled.h5`
  margin-bottom: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.title.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.medium.letterSpacing}px;
`;

export const Description = styled.p`
  margin-bottom: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.small.fontWeight};
  line-height: ${(props) => props.theme.styles.title.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.small.letterSpacing}px;
`;

export const Buttons = styled.div`
  display: flex;

  margin-top: 10px;
`;
