import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 40px 20px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export const Image = styled.img`
  width: 150px;
  background: ${(props) => props.theme.schemes.light.surfaceVariant};

  border-radius: 50%;
`;

export const Box = styled.div`
  width: 100%;
`;

export const Title = styled.h5`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.large.fontWeight};
  line-height: ${(props) => props.theme.styles.title.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.large.letterSpacing}px;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const Anchor = styled.a``;

export const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

export const Tag = styled.span`
  border-radius: 20px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.primaryContainer};
  color: ${(props) => props.theme.schemes.light.onPrimaryContainer};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;

  gap: 10px;
`;
