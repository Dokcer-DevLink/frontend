import { Dispatch, SetStateAction, useState } from 'react';
import {
  Buttons,
  Description,
  FormInner,
  Title,
  Wrapper,
} from './AutoMatchForm.style';
import { Form } from '@/components/Form';
import { Button } from '@/components/Elements';
import { autoMatch } from '..';

type AutoMatchFormProps = {
  onSuccess: () => void;
};

export const AutoMatchForm = ({ onSuccess }: AutoMatchFormProps) => {
  const [role, setRole] = useState<'MENTOR' | 'MENTEE'>('MENTOR');

  const handleSubmit = () => {
    (async () => {
      try {
        const result = await autoMatch();
        onSuccess();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  return (
    <Wrapper>
      <Title>자동으로 멘토 / 멘티 찾기</Title>
      <Description>
        지역/기술/스케쥴 등 입력하신 정보를 바탕으로 적합한 멘토링 상대방을
        매칭합니다. 매칭에 다소 시간이 걸릴 수 있습니다.
      </Description>
      <Form onSubmit={handleSubmit}>
        {({}) => (
          <FormInner>
            <Description>상대방의 역할을 선택해주세요</Description>
            <Buttons>
              <Button
                onclick={() => setRole('MENTOR')}
                isoutlined={role === 'MENTEE'}
                variant="secondary"
                type="button"
                width="160px"
                justifycontent="center"
              >
                멘토
              </Button>
              <Button
                onclick={() => setRole('MENTEE')}
                isoutlined={role === 'MENTOR'}
                variant="secondary"
                type="button"
                width="160px"
                justifycontent="center"
              >
                멘티
              </Button>
            </Buttons>
            <Button type="submit" justifycontent="center">
              자동매칭하기
            </Button>
          </FormInner>
        )}
      </Form>
    </Wrapper>
  );
};
