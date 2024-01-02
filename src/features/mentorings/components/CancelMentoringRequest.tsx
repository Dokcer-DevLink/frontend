import { Button, ConfirmationDialog } from '@/components/Elements';
import { PostType, VerticalPost } from '@/features/posts';
import { RequestState } from './CancelMentoringRequest.style';

export type CancelMentoringRequestProps = PostType & {
  applyStatus: 'WAITING' | 'COMPLETED';
};

export const CancelMentoringRequest = ({
  postUuid,
  postTitle,
  postImageUrl,
  stacks,
  address,
  postType,
  unitTimeCount,
  onOffline,
  applyStatus,
  description,
}: CancelMentoringRequestProps) => {
  const handleClickCancel = () => {};
  return (
    <ConfirmationDialog
      triggerButton={
        <Button variant="background" padding="0">
          <VerticalPost
            postUuid={postUuid}
            postTitle={postTitle}
            postImageUrl={postImageUrl}
            stacks={stacks}
            address={address}
            postType={postType}
            unitTimeCount={unitTimeCount}
            onOffline={onOffline}
            description={description}
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
            variant="primary"
            onclick={handleClickCancel}
          >
            취소하기
          </Button>
        </>
      }
      title="멘토링 취소"
      description={
        '멘토링 요청을 취소할까요?\n ※본 기능은 추후 업데이트 될 예정입니다'
      }
    ></ConfirmationDialog>
  );
};
