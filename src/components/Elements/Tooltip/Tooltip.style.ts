import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  span {
    display: none;
  }

  &:hover {
    span {
      display: flex;
    }
  }
`;

export const Tips = styled.span`
  position: absolute;
  z-index: 10;
  top: 110%;

  border-radius: 5px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light.onSecondary};

  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;
