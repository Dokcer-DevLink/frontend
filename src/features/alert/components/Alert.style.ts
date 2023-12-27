import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.schemes.light.background};

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Title = styled.h5`
  color: ${(props) => props.theme.schemes.light.onSurfaceVariant};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.schemes.light.onSurfaceVariant};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
