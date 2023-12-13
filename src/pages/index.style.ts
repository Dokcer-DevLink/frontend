import { getTextColor } from '@/utils/getColor';
import styled from 'styled-components';

export const PostSeeAll = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: ${(props) => props.theme.schemes.light['primary']};
  color: ${(props) => props.theme.schemes.light[getTextColor('primary')]};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  cursor: pointer;
`;

export const UserSeeAll = styled.div`
  width: 140px;
  height: 170px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: ${(props) => props.theme.schemes.light['primary']};
  color: ${(props) => props.theme.schemes.light[getTextColor('primary')]};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  cursor: pointer;
`;
