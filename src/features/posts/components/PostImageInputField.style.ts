import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
`;

export const InputWrapper = styled.div``;

export const AddImage = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 120px;
  height: 120px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.schemes.light.primaryContainer};
  color: ${(props) => props.theme.schemes.light.onPrimaryContainer};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const Image = styled.img`
  height: 120px;
  width: 120px;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};

  border-radius: 5px;
  object-fit: cover;
`;

export const NoImage = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  width: 120px;

  padding: 10px;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};
  color: ${(props) => props.theme.schemes.light.onSurfaceVariant};

  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;

  border-radius: 5px;
  object-fit: cover;
`;
