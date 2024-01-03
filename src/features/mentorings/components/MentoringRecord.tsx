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
import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react';
import { recordMentoring } from '../api/recordMentoring';
import { MentoringType } from '../type';

type MentoringRecordProps = {
  filename?: string;
  record?: string;
  mentoringUuid: string;
  setCurrentMentoring: Dispatch<SetStateAction<MentoringType | undefined>>;
};

export const MentoringRecord = ({
  filename,
  record,
  mentoringUuid,
  setCurrentMentoring,
}: MentoringRecordProps) => {
  const [recordFilename, setRecordFilename] = useState(
    filename ? filename : '등록된 파일이 없습니다'
  );
  const [audioUrl, setAudioUrl] = useState<string>();
  const handleSubmit = async (
    values: any,
    event: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    const result = await recordMentoring({
      mentoringUuid,
      content: audioUrl as string,
    });
    setCurrentMentoring((prev: any) => {
      return { ...prev, recordContent: result.data.content };
    });
    if (event) {
      setAudioUrl('');
      event.target.reset();
    }
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
            <Filename>{audioUrl}</Filename>
            <Buttons>
              <AudioFileInputField
                label={<SelectFile>파일 선택하기</SelectFile>}
                error={formState.errors['audio']?.root}
                setAudioUrl={setAudioUrl}
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
