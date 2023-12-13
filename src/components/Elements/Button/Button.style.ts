import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: ${(props) => props.theme.schemes.light.primary};
  color: ${(props) => props.theme.schemes.light.onPrimary};
`;
