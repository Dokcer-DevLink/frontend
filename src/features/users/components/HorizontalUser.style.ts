import { getTextColor } from '@/utils/getColor';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.hoveredBackground};
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  background: ${(props) => props.theme.schemes.light.surfaceVariant};

  border-radius: 50%;

  object-fit: cover;
`;

export const Nickname = styled.span``;

export const Tags = styled.ul`
  width: 100%;
  left: 10px;
  bottom: 5px;

  display: flex;
  gap: 10px;
`;

export const Tag = styled.li`
  max-width: 60px;
  border-radius: 10px;
  padding: 3px 10px;

  background: ${(props) => props.theme.schemes.light.secondary};
  color: ${(props) => props.theme.schemes.light[getTextColor('secondary')]};
  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  white-space: nowrap;

  opacity: 0.8;
  list-style: none;

  overflow: hidden;
  text-overflow: ellipsis;
`;
