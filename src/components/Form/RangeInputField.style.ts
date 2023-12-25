import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;

  height: 5px;

  border-radius: 5px;
  padding: 0 2px;

  background-color: ${(props) => props.theme.schemes.light.secondaryContainer};

  cursor: pointer;

  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    position: relative;
    z-index: 5;

    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.schemes.light.primary};
    opacity: 1;
  }
`;

export const Datalist = styled.datalist`
  position: relative;
  z-index: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  bottom: 17.5px;
  padding: 0 -14px;

  /* disable text selection */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  /* disable click events */
  pointer-events: none;
`;

export const OptionWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const Option = styled.option`
  width: 20px;
  height: 20px;

  display: block;

  border-radius: 50%;
  background-color: ${(props) => props.theme.schemes.light.secondaryContainer};
`;

export const OptionValue = styled.span`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);

  color: ${(props) => props.theme.schemes.light.secondary};

  font-size: ${(props) => props.theme.styles.label.small.fontSize}px;
  font-weight: ${(props) => props.theme.styles.label.small.fontWeight};
  line-height: ${(props) => props.theme.styles.label.small.lineHeight}px;
  letter-spacing: ${(props) => props.theme.styles.label.small.letterSpacing}px;

  white-space: nowrap;
`;
