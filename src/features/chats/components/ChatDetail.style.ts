import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 10px 20px;

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

export const OpponentChat = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const MyChat = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};
`;

export const Blank = styled.div`
  width: 40px;
`;

export const Message = styled.p`
  padding: 5px;
  border-radius: 10px;

  background: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light.onSecondary};

  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const ChatedAt = styled.span`
  background: ${(props) => props.theme.schemes.light.background};
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;
