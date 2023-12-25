import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;

  border: 1px solid ${(props) => props.theme.schemes.light.primaryContainer};
  border-radius: 5px;
  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Option = styled.option``;
