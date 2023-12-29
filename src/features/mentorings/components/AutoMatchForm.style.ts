import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 20px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.large.fontWeight};
  line-height: ${(props) => props.theme.styles.title.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.large.letterSpacing}px;
`;

export const Description = styled.p`
  width: 320px;
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const Buttons = styled.div`
  display: flex;

  margin-bottom: 50px;
`;
