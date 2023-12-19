import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img`
  height: 120px;
  width: 120px;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};

  border-radius: 50%;
  object-fit: cover;

  cursor: pointer;
`;
