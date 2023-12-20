import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;

  background-color: ${(props) => props.theme.schemes.light.background};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const UserImage = styled.img`
  width: 60px;

  margin-right: 15px;
  border-radius: 50%;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};
`;

export const Contents = styled.div`
  width: 60%;
`;

export const UserNickname = styled.span`
  margin-right: 20px;

  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;
`;

export const RecentChatedAt = styled.span`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;

export const RecentMessage = styled.p`
  margin-top: 10px;

  color: ${(props) => props.theme.schemes.light.onBackground};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UnconfirmedMessageNumber = styled.span`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  border-radius: 50%;

  background: ${(props) => props.theme.schemes.light.error};
  color: ${(props) => props.theme.schemes.light.onError};

  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;
