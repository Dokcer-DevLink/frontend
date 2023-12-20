import styled from 'styled-components';
import { Menu as UIMenu } from '@headlessui/react';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled(UIMenu.Button)`
  border: none;
`;

export const Items = styled(UIMenu.Items)`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;

  padding: 10px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
`;
