import { Header, MainLayout } from '@/components/Layout';
import { Inner } from '@/styles/pageStyles/post/[...params].style';
import { Button } from '@/components/Elements';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { MyActions, OpponentActions, PostDetail } from '@/features/posts';

import Example from '@/assets/images/example.png';
import { useState } from 'react';

export default function Post() {
  const [isMine, setIsMine] = useState(true);
  const router = useRouter();
  return (
    <>
      <Header
        title={postDetail.title}
        leftbuttons={
          <Button
            textstyle="title"
            size="large"
            variant="background"
            padding="2px"
            startIcon={<FaArrowLeft />}
            onclick={() => router.back()}
          />
        }
        rightbuttons={
          isMine ? <MyActions id={postDetail.id} /> : <OpponentActions />
        }
        isDisplayInMobile={true}
      />
      <Inner>
        <PostDetail
          imageUrl={postDetail.imageUrl}
          isMine={isMine}
          userId={postDetail.user.id}
        />
      </Inner>
    </>
  );
}

const postDetail = {
  id: '1',
  title: '리액트 멘토링 해주세요',
  imageUrl: Example.src,
  user: { id: '1' },
};
