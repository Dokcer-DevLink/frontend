import { Description, Wrapper } from './Empty.style';

export const Empty = ({ description = '조회할 내용이 없습니다' }) => {
  return (
    <Wrapper>
      <Description>{description}</Description>
    </Wrapper>
  );
};
