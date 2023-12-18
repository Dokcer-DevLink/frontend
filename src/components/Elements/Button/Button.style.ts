import { theme } from '@/styles/theme';
import { getTextColor, getHoveredColor } from '@/utils/getColor';
import styled from 'styled-components';

interface Wrapper {
  variant: string;
  textstyle: keyof typeof theme.styles;
  size: 'large' | 'medium' | 'small';
  padding: string | undefined;
  flexdirection?: 'column' | 'row';
  fontweight?: Number;
  isoutlined: Boolean;
  justifycontent: 'start' | 'center' | 'space-between' | 'space-around';
  border: string | undefined;
}

export const Wrapper = styled.button<Wrapper>`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  gap: 15px;
  align-items: center;

  border: ${(props) =>
    props.border
      ? props.border
      : props.isoutlined
      ? `1px solid ${props.theme.schemes.light[props.variant]}`
      : 'none'};
  border-radius: 5px;
  padding: ${(props) =>
    props.padding
      ? props.padding
      : props.border || props.isoutlined
      ? '9px 10px'
      : '10px'};

  background-color: ${(props) =>
    props.isoutlined
      ? props.theme.schemes.light[getTextColor(props.variant)]
      : props.theme.schemes.light[props.variant]};
  color: ${(props) =>
    props.isoutlined
      ? props.theme.schemes.light[props.variant]
      : props.theme.schemes.light[getTextColor(props.variant)]};
  font-size: ${(props) =>
    props.theme.styles[props.textstyle][props.size].fontSize}px;
  font-weight: ${(props) =>
    props.fontweight
      ? props.fontweight
      : props.theme.styles[props.textstyle][props.size].fontWeight};
  line-height: ${(props) =>
    props.theme.styles[props.textstyle][props.size].lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.styles[props.textstyle][props.size].letterSpacing}px;

  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isoutlined
        ? props.theme.schemes.light[
            getHoveredColor(getTextColor(props.variant))
          ]
        : props.theme.schemes.light[getHoveredColor(props.variant)]};
  }
`;
