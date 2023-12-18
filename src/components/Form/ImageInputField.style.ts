import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};

  border-radius: 50%;
  object-fit: cover;

  cursor: pointer;
`;
