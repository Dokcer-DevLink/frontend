import styled from 'styled-components';

interface Wrapper {
  textAlign: 'start' | 'center' | 'end';
}

export const Wrapper = styled.div<Wrapper>`
  width: 100%;
  text-align: ${(props) => props.textAlign};
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const ErrorMessage = styled.span``;
