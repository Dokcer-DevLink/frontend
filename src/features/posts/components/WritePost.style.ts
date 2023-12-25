import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 15%;

  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));

  @media (min-width: 801px) {
    right: 30%;
    bottom: 5%;
  }
`;
