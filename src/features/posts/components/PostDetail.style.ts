import styled from 'styled-components';

interface Content {
  flexDirection?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
}

export const Wrapper = styled.div``;

export const ImageWrapper = styled.div`
  background-color: ${(props) => props.theme.schemes.light.scrim};
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 700px;
  max-height: 400px;

  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  background: ${(props) => props.theme.schemes.light.background};

  padding: 10px;
  border-bottom: 1px solid
    ${(props) => props.theme.schemes.light.surfaceVariant};

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const UserInfomation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: ${(props) => props.theme.schemes.light.surfaceVariant};
`;

export const Nickname = styled.span`
  color: ${(props) => props.theme.schemes.light.secondary};
  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;
`;

export const UserRegion = styled.span`
  color: ${(props) => props.theme.schemes.light.secondary};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 10px;
`;

export const Introduction = styled.p`
  color: ${(props) => props.theme.schemes.light.onBackground};
  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const Content = styled.div<Content>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};

  color: ${(props) => props.theme.schemes.light.secondary};
  font-size: ${(props) => props.theme.styles.body.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.body.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.medium.letterSpacing}px;
`;

export const ContentName = styled.h5`
  color: ${(props) => props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.title.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.small.fontWeight};
  line-height: ${(props) => props.theme.styles.title.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.small.letterSpacing}px;
`;

export const Phrase = styled.p`
  color: ${(props) => props.theme.schemes.light.secondary};

  font-size: ${(props) => props.theme.styles.body.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.body.small.fontWeight};
  line-height: ${(props) => props.theme.styles.body.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.body.small.letterSpacing}px;
`;

export const ButtonWrapper = styled.span`
  width: 60px;
  display: block;

  margin-left: auto;
`;

export const Tags = styled.div`
  margin-top: 5px;
`;

export const Tag = styled.span`
  margin-right: 5px;
  border-radius: 12px;
  padding: 5px;

  background: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light.onSecondary};

  font-size: ${(props) => props.theme.styles.label.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.label.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.medium.letterSpacing}px;
`;
