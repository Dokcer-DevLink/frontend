import styled from 'styled-components';

interface Buttons {
  isShowing: boolean;
}

export const Wrapper = styled.div`
  position: relative;
`;

export const Trigger = styled.span`
  position: relative;
  z-index: 20;
`;

export const Buttons = styled.div<Buttons>`
  position: absolute;
  top: 110%;
  right: 0;
  z-index: 20;

  display: ${(props) => (props.isShowing ? 'block' : 'none')};

  padding: 10px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  opacity: 0.4;

  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.schemes.light.shadow};
  transition: opacity;
`;
