import styled from 'styled-components';

interface Buttons {
  isShowing: boolean;
}

export const Wrapper = styled.div`
  position: relative;
`;

export const Trigger = styled.span``;

export const Buttons = styled.div<Buttons>`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;

  display: ${(props) => (props.isShowing ? 'block' : 'none')};

  padding: 10px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
`;
