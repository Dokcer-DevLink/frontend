import styled from 'styled-components';

export const Inner = styled.div`
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 801px) {
    padding: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 5%,
    ${(props) => props.theme.schemes.light.background}
  );
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
`;

export const Infomations = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserImage = styled.img`
  width: 80px;

  border-radius: 50%;

  background-color: ${(props) => props.theme.schemes.light.secondary};

  object-fit: cover;
`;

export const TextInfomations = styled.div``;

export const Nickname = styled.span`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const Email = styled.address`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Requests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

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

export const Request = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.schemes.light.primaryContainer} 8%,
    ${(props) => props.theme.schemes.light.background}
  );

  filter: drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.15));
`;

export const RequestPostImage = styled.img`
  width: 100px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};
`;

export const RequestInfomation = styled.div`
  padding: 10px;
`;

export const RequestPostTitle = styled.h5`
  margin-bottom: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.body.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.large.fontWeight};
  line-height: ${(props) => props.theme.styles.body.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.large.letterSpacing}px;
`;

export const RequestTag = styled.span`
  margin-right: 5px;
  border-radius: 5px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};
  color: ${(props) => props.theme.schemes.light.onSurfaceVariant};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;
`;

export const RequestState = styled.span`
  margin: 0 0 0 auto;
  border-radius: 10px;
  padding: 5px;

  background-color: ${(props) => props.theme.schemes.light.primary};
  color: ${(props) => props.theme.schemes.light.onPrimary};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;

  white-space: nowrap;
`;

export const RequestUserImage = styled.img`
  width: 100px;

  border-radius: 50%;

  background-color: ${(props) => props.theme.schemes.light.surfaceVariant};
`;
