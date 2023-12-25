import { theme } from '@/styles/theme';
import styled from 'styled-components';

interface Textarea {
  variant: string;
  texttype: keyof typeof theme.styles;
  size: 'large' | 'medium' | 'small';
}

export const Textarea = styled.textarea<Textarea>`
  width: 100%;
  height: 200px;

  border: ${(props) =>
    `1.5px solid ${props.theme.schemes.light[props.variant]}`};
  border-radius: 5px;
  padding: 5px;

  color: ${(props) => props.theme.schemes.light[props.variant]};

  font-size: ${(props) =>
    props.theme.styles[props.texttype][props.size].fontSize}px;
  font-weight: ${(props) =>
    props.theme.styles[props.texttype][props.size].fontWeight};
  line-height: ${(props) =>
    props.theme.styles[props.texttype][props.size].lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.styles[props.texttype][props.size].letterSpacing}px;

  outline: none;
  resize: none;
`;
