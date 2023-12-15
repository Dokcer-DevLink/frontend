import { getTextColor } from '@/utils/getColor';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.schemes.light[getTextColor('background')]};
  font-size: ${(props) => props.theme.styles.title.medium.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.medium.fontWeight};
  line-height: ${(props) => props.theme.styles.title.medium.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.medium.letterSpacing}px;
`;

export const SeeAll = styled.span`
  color: ${(props) => props.theme.schemes.light[getTextColor('background')]};
  font-size: ${(props) => props.theme.styles.title.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.title.small.fontWeight};
  line-height: ${(props) => props.theme.styles.title.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.title.small.letterSpacing}px;
`;

export const Inner = styled.div`
  margin-top: 10px;

  display: flex;
  gap: 30px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
