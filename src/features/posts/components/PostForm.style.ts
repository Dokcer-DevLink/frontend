import styled from 'styled-components';

interface InputSection {
  display?: 'block' | 'none';
}

export const Wrapper = styled.div``;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputSection = styled.div<InputSection>`
  display: ${(props) => (props.display ? props.display : 'block')};
`;

export const InputSectionTitle = styled.h4`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.title.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.medium.letterSpacing}px;
`;

export const Buttons = styled.div`
  display: flex;
`;
