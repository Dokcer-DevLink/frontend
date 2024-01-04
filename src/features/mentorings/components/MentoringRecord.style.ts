import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h4`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.title.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.medium.letterSpacing}px;
`;

export const FormInner = styled.div`
  display: flex;
  max-width: 700px;
`;

export const Filename = styled.span`
  width: 400px;

  padding: 5px;

  color: ${(props) => props.theme.schemes.light.onPrimaryContainer};
  background-color: ${(props) => props.theme.schemes.light.primaryContainer};

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectFile = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.schemes.light.primary};

  background-color: ${(props) => props.theme.schemes.light.background};
  color: ${(props) => props.theme.schemes.light.primary};

  font-size: ${(props) => props.theme.styles.label.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.label.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.medium.letterSpacing}px;

  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Record = styled.div`
  padding: 10px;

  height: 60vh;
  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};

  white-space: pre-wrap;
`;

export const RecordContent = styled.p`
  height: 100%;

  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;

  overflow: hidden;
  overflow-y: scroll;
`;
