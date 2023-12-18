import styled from 'styled-components';

interface Buttons {
  margin: string;
}

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;

  width: 100%;

  display: none;

  border-bottom: 1px solid
    ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Buttons = styled.div<Buttons>`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: ${(props) => props.margin};
`;

export const Title = styled.h2`
  margin: 0 auto;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.headline.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.headline.small.fontWeight};
  line-height: ${(props) => props.theme.styles.headline.small.lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.styles.headline.small.letterSpacing}px;
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: ${(props) => props.width};
  cursor: pointer;
`;
