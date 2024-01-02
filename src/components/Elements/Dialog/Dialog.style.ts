import styled from 'styled-components';
import { Dialog as UIDialog } from '@headlessui/react';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled(UIDialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.4;

  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.schemes.light.shadow};
  transition: opacity;
`;
