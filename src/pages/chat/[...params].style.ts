import styled from 'styled-components';

export const Inner = styled.div`
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.schemes.light.border};

  background-color: ${(props) => props.theme.schemes.light.background};
  @media (max-width: 801px) {
    display: none;
  }
`;

export const UserInfomation = styled.div``;

export const Nickname = styled.span`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;
