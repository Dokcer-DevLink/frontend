import { Button } from '@/components/Elements';
import { Header, MainLayout } from '@/components/Layout';
import { PostForm } from '@/features/posts/components/PostForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { Inner } from '@/styles/pageStyles/post/edit.style';
import { useSearchParams } from 'next/navigation';
import { PostType, getPostDetail } from '@/features/posts';
import { useEffect, useState } from 'react';

export default function Edit() {
  const router = useRouter();
  const [defaultPost, setDefaultPost] = useState<PostType>();

  const postUuid = useSearchParams().get('id');

  useEffect(() => {
    if (!postUuid) {
      return;
    }
    (async () => {
      const result = await getPostDetail({ postUuid });
      setDefaultPost(result.data);
    })();
  }, [postUuid]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="게시물 수정하기"
        isDisplayInMobile={true}
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
          <Button form="post-form" type="submit">
            수정완료
          </Button>
        }
      />
      <Inner>
        <PostForm defaultPost={defaultPost} />
      </Inner>
    </>
  );
}
