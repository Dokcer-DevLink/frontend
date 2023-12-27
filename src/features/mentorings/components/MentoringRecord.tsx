import { AudioFileInputField, Event, Form } from '@/components/Form';
import {
  Buttons,
  Filename,
  FormInner,
  Record,
  RecordContent,
  SelectFile,
  Title,
  Wrapper,
} from './MentoringRecord.style';
import { Button, Empty } from '@/components/Elements';
import { useState } from 'react';

type MentoringRecordProps = {
  filename?: string;
  record?: string;
};

export const MentoringRecord = ({ filename, record }: MentoringRecordProps) => {
  const [recordFilename, setRecordFilename] = useState(
    filename ? filename : '등록된 파일이 없습니다'
  );
  const handleSubmit = (values: any) => {
    console.log('Submit');
    console.log(values);
  };

  const handleAudioFileInputChange = (event: Event) => {
    setRecordFilename(event.target.files[0].name);
  };
  return (
    <Wrapper>
      <Title>멘토링 기록하기</Title>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <FormInner>
            <Filename>{recordFilename}</Filename>
            <Buttons>
              <AudioFileInputField
                label={<SelectFile>파일 선택하기</SelectFile>}
                registration={register('audio', {
                  onChange: (event) => handleAudioFileInputChange(event),
                })}
                error={formState.errors['audio']?.root}
              />
              <Button
                width="100px"
                justifycontent="center"
                borderradius="0"
                type="submit"
              >
                업로드
              </Button>
            </Buttons>
          </FormInner>
        )}
      </Form>
      <Record>
        {true ? <RecordContent>{record}</RecordContent> : <Empty />}
      </Record>
    </Wrapper>
  );
};
