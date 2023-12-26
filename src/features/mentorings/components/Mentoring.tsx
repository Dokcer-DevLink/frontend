import {
  Contents,
  PromisedAt,
  Region,
  Status,
  Title,
  Wrapper,
} from './Mentoring.style';

export type MentoringProps = {
  id: string;
  title: string;
  region: string;
  promisedAt: string;
  status: string;
};

export const Mentoring = ({
  title,
  region,
  promisedAt,
  status,
}: MentoringProps) => {
  return (
    <Wrapper>
      <Contents>
        <Title>{title}</Title>
        <PromisedAt>{promisedAt}</PromisedAt>
        <Region>{region}</Region>
      </Contents>
      <Status>{status}</Status>
    </Wrapper>
  );
};
