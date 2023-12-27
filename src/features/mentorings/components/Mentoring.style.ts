import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  background-color: ${(props) => props.theme.schemes.light.background};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Title = styled.h5`
  margin-bottom: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const Contents = styled.div``;

export const PromisedAt = styled.span`
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

export const Region = styled.span`
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

export const Status = styled.span`
  border-radius: 5px;
  padding: 3px;

  background: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light.onSecondary};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;
`;
