import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
`;

export const Contents = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Tags = styled.ul`
  position: absolute;
  left: 10px;
  bottom: 5px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Tag = styled.li`
  border-radius: 10px;
  padding: 3px 10px;

  background: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light.onSecondary};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  opacity: 0.8;
  list-style: none;
`;

export const Title = styled.h5`
  background: ${(props) => props.theme.schemes.light.background};
  color: ${(props) => props.theme.schemes.light.onBackground};
  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;
`;
