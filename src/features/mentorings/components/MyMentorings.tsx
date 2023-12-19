import { Button, Empty } from '@/components/Elements';
import { Mentoring, MentoringProps } from './Mentoring';
import { Buttons, Mentorings, Wrapper } from './MyMentorings.style';
import { useEffect, useState } from 'react';

type MyMentoringsProps = {
  mentoringsAsMentor: MentoringProps[];
  mentoringsAsMentee: MentoringProps[];
};

export const MyMentorings = ({
  mentoringsAsMentor,
  mentoringsAsMentee,
}: MyMentoringsProps) => {
  const [isSelectedRoleEqualsMentor, setIsSelectedRoleEqualsMentor] =
    useState(true);
  const [mentorings, setMentorings] = useState(mentoringsAsMentor);

  useEffect(() => {
    if (isSelectedRoleEqualsMentor) {
      setMentorings(mentoringsAsMentor);
    } else {
      setMentorings(mentoringsAsMentee);
    }
  }, [isSelectedRoleEqualsMentor]);

  return (
    <Wrapper>
      <Buttons>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(true)}
          justifycontent="center"
          variant="secondary"
          isoutlined={!isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          내가 한 멘토링
        </Button>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(false)}
          justifycontent="center"
          variant="secondary"
          isoutlined={isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          내가 받은 멘토링
        </Button>
      </Buttons>
      {mentorings.length ? (
        <Mentorings>
          {mentorings.map((mentoring, i) => (
            <Mentoring
              key={i}
              title={mentoring.title}
              promisedAt={mentoring.promisedAt}
              region={mentoring.region}
              status={mentoring.status}
            />
          ))}
        </Mentorings>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
