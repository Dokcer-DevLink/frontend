import { Tips, Wrapper } from './Tooltip.style';

type TooltipProps = {
  children: React.ReactNode;
  tips: string;
};

export const Tooltip = ({ children, tips }: TooltipProps) => {
  return (
    <Wrapper>
      {children}
      <Tips>{tips}</Tips>
    </Wrapper>
  );
};
