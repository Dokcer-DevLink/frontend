import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Mentorings = styled.div``;

export const Buttons = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  width: 100%;

  display: flex;

  background-color: ${(props) => props.theme.schemes.light.background};
`;
