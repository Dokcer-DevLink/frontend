import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 20px 20px;

  @media (min-width: 801px) {
    padding: 0 0 20px;
  }
`;
