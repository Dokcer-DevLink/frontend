import styled from 'styled-components';

export const Inner = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 20px 20px;

  @media (min-width: 801px) {
    padding: 0 0 20px;
  }
`;

export const ButtonBox = styled.div``;

export const Buttons = styled.div`
  display: flex;
`;
