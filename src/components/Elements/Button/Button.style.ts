import { theme } from '@/styles/theme';
import { getTextColor, getHoveredColor } from '@/utils/getColor';
import styled from 'styled-components';

interface Wrapper {
  variant: string;
  type: keyof typeof theme.styles;
  size: 'large' | 'medium' | 'small';
  flexdirection?: 'column' | 'row';
  fontweight?: Number;
}

export const Wrapper = styled.button<Wrapper>`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  gap: 15px;
  align-items: center;

  border: none;
  border-radius: 5px;
  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light[props.variant]};
  color: ${(props) => props.theme.schemes.light[getTextColor(props.variant)]};
  font-size: ${(props) =>
    props.theme.styles[props.type][props.size].fontSize}px;
  font-weight: ${(props) =>
    props.fontweight
      ? props.fontweight
      : props.theme.styles[props.type][props.size].fontWeight};
  line-height: ${(props) =>
    props.theme.styles[props.type][props.size].lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.styles[props.type][props.size].letterSpacing}px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.theme.schemes.light[getHoveredColor(props.variant)]};
  }
`;
