import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;

  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};

  object-fit: cover;
`;

export const Infomations = styled.div`
  padding: 10px;
`;

export const Nickname = styled.h5`
  margin-bottom: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const Tag = styled.span`
  margin-right: 5px;
  border-radius: 5px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};
  color: ${(props) => props.theme.schemes.light.onSurfaceVariant};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;
`;

export const RightElements = styled.span`
  margin: 0 0 0 auto;
`;
