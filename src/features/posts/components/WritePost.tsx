import { Button } from '@/components/Elements';
import { Wrapper } from './WritePost.style';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const WritePost = () => {
  const userUuid = useSelector(({ auth }) => auth.userUuid);
  return (
    <>
      {userUuid && (
        <Wrapper>
          <Link href="/post/write">
            <Button startIcon={<FaPlus size="36" />} borderradius="50%" />
          </Link>
        </Wrapper>
      )}
    </>
  );
};
