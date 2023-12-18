import styled from 'styled-components';

export const Inner = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 801px) {
    padding: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;
