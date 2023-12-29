import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: ${(props) => props.theme.schemes.light};
`;
