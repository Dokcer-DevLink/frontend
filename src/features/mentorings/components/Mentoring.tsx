import {
  Contents,
  PromisedAt,
  Region,
  Status,
  Title,
  Wrapper,
} from './Mentoring.style';

export type MentoringProps = {
  title: string;
  region: string;
  promisedAt: string;
  status: '완료' | '예정';
};

export const Mentoring = ({ title, region, promisedAt }: MentoringProps) => {
  return (
    <Wrapper>
      <Contents>
        <Title>{title}</Title>
        <PromisedAt>{promisedAt}</PromisedAt>
        <Region>{region}</Region>
      </Contents>
      <Status>완료</Status>
    </Wrapper>
  );
};
