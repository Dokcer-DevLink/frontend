import { theme } from '@/styles/theme';
import { getTextColor } from '@/utils/getColor';
import styled from 'styled-components';

interface Input {
  variant: string;
  texttype: keyof typeof theme.styles;
  size: 'large' | 'medium' | 'small';
}

export const Input = styled.input<Input>`
  width: 100%;
  padding: 5px;

  border: ${(props) =>
    `1.5px solid ${props.theme.schemes.light[props.variant]}`};
  border-radius: 5px;
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
`;
