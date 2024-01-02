import { Button, Menu } from '@/components/Elements';
import { FaEllipsisV } from 'react-icons/fa';
import { Buttons } from './MyActions.style';
import { DeletePost } from '.';
import { useRouter } from 'next/router';
import Link from 'next/link';

type MyActionsProps = {
  postUuid: string;
};

export const MyActions = ({ postUuid }: MyActionsProps) => {
  return (
    <Menu
      triggerButton={
        <Button startIcon={<FaEllipsisV />} variant="background" />
      }
      buttons={
        <Buttons>
          <Link href={`/post/edit?id=${postUuid}`}>
            <Button justifycontent="center" variant="background">
              수정하기
            </Button>
          </Link>
          <DeletePost postUuid={postUuid} />
        </Buttons>
      }
    />
  );
};
