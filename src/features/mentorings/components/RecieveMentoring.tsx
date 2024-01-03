import { Button, ConfirmationDialog } from '@/components/Elements';
import { VerticalUser } from '@/features/users';
import { UserType } from '@/features/users/type';
import React from 'react';
import { RequestState } from './RecieveMentoring.style';
import { acceptMentoringRequest } from '../api/acceptMentoringRequest';
import { rejectMentoringRequest } from '../api/rejectMentoringRequest';
import { useRouter } from 'next/router';

type RecieveMentoringProps = UserType & {
  applyUuid: string;
  applyStatus: 'WAITING' | 'COMPLETED';
};

export const RecieveMentoring = ({
  nickname,
  profileImageUrl,
  stacks,
  address,
  githubAddress,
  userUuid,
  applyUuid,
  applyStatus,
}: RecieveMentoringProps) => {
  const router = useRouter();
  const handleClickAccept = async () => {
    try {
      const result = await acceptMentoringRequest({ applyUuid });
      router.push(`/mentoring/${result.data.mentoringUuid}`);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClickReject = async () => {
    try {
      const result = await rejectMentoringRequest({ applyUuid });
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" padding="0">
          <VerticalUser
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            stacks={stacks}
            address={address}
            githubAddress={githubAddress}
            userUuid={userUuid}
            rightElement={
              <RequestState>
                {applyStatus === 'WAITING' ? '수락 대기 중' : '수락 완료'}
              </RequestState>
            }
          />
        </Button>
      }
      confirmationButton={
        <>
          <Button
            justifycontent="center"
            variant="background"
            onclick={handleClickAccept}
          >
            수락하기
          </Button>
          <Button
            justifycontent="center"
            variant="background"
            onclick={handleClickReject}
          >
            거절하기
          </Button>
        </>
      }
      title="멘토링 수락"
      description="멘토링을 수락할까요?"
    ></ConfirmationDialog>
  );
};
