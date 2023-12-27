import styled from 'styled-components';

export const Logo = styled.img`
  width: 25px;

  border: 1px solid #000;
  border-radius: 50%;
  background-color: ${(props) => props.theme.schemes.light.background};

  object-position: 0% 2px;
`;
