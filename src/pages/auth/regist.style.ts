import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0 auto;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.headline.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.headline.large.fontWeight};
  line-height: ${(props) => props.theme.styles.headline.large.lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.styles.headline.large.letterSpacing}px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 0 auto;
`;

export const Guide = styled.p`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;
`;
