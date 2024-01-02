import { Header, MainLayout } from '@/components/Layout';
import { Inner } from '@/styles/pageStyles/post/[...params].style';
import { Button } from '@/components/Elements';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  MyActions,
  OpponentActions,
  PostDetail,
  PostDetailProps,
  getPostDetail,
} from '@/features/posts';

import Example from '@/assets/images/example.png';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getUser } from '@/features/users';

export default function Post() {
  const router = useRouter();
  const [postDetail, setPostDetail] = useState<PostDetailProps>();
  const [userProfile, setUserProfile] = useState();

  const [isMine, setIsMine] = useState<boolean>(false);
  const myUserUuid = useSelector(({ auth }) => auth.userUuid);
  const profile = useSelector(({ profile }) => profile);

  useEffect(() => {
    if (postDetail?.userUuid === myUserUuid) {
      setIsMine(true);
      setUserProfile(profile);
    } else if (postDetail?.userUuid) {
      (async () => {
        try {
          const result = await getUser({ userUuid: postDetail.userUuid });
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [postDetail, myUserUuid, profile]);

  const { params } = useParams();
  const [postUuid, setPostUuid] = useState<string>();
  useEffect(() => {
    if (typeof params?.length !== 'number') {
      return;
    }
    console.log(params);
    setPostUuid(params[0]);
  }, [params]);
  console.log(router);

  useEffect(() => {
    if (!postUuid) {
      return;
    }
    (async () => {
      try {
        const result = await getPostDetail({ postUuid });
        setPostDetail(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [postUuid]);

  useEffect(() => {
    console.log(postDetail);
    if (router.query?.postStatus) {
      setPostDetail((prev: any) => {
        return { ...prev, postStatus: router.query?.postStatus };
      });
    }
  }, [router]);

  if (!postDetail) {
    return;
  }
  return (
    <>
      <Header
        title={postDetail?.postTitle}
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
          isMine ? (
            <MyActions postUuid={postDetail.postUuid} />
          ) : (
            <OpponentActions
              userUuid={postDetail.userUuid}
              myUserUuid={myUserUuid}
              runningTime={postDetail.unitTimeCount}
              postType={postDetail.postType}
              postUuid={postDetail.postUuid}
              onOffline={postDetail.onOffline}
              address={postDetail.address?.addressName}
            />
          )
        }
        isDisplayInMobile={true}
      />
      <Inner>
        <PostDetail {...postDetail} />
      </Inner>
    </>
  );
}
