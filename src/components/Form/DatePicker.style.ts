import styled from 'styled-components';

interface Item {
  isSelectedDate: boolean;
  isSelectedMonth: boolean;
}

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const YearAndMonth = styled.h5``;

export const Calendar = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.div`
  text-align: center;
`;

export const Item = styled.div<Item>`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.isSelectedDate
      ? props.theme.schemes.light.primary
      : props.theme.schemes.light.background};
  color: ${(props) =>
    props.isSelectedDate
      ? props.theme.schemes.light.onPrimary
      : !props.isSelectedMonth
      ? props.theme.schemes.light.surfaceVariant
      : props.theme.schemes.light.onBackground};

  font-size: ${(props) => props.theme.styles.label.large.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.large.fontWeight};
  line-height: ${(props) => props.theme.styles.label.large.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.large.letterSpacing}px;

  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isSelectedDate
        ? props.theme.schemes.light.hoveredPrimary
        : props.theme.schemes.light.hoveredBackground};
  }
`;

export const Invisible = styled.div`
  display: none;
`;
