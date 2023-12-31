import { Button, Empty } from '@/components/Elements';
import { Header, MainLayout } from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  Buttons,
  Infomations,
  Inner,
  Nickname,
  Profile,
  Requests,
  TextInfomations,
  UserImage,
} from '@/styles/pageStyles/my-page/index.style';

import NoProfileUser from '@/assets/icons/no-profile-user.svg';
import { useEffect, useState } from 'react';
import { DeleteAccount, Logout } from '@/features/auth';
import {
  CancelMentoringRequest,
  CancelMentoringRequestProps,
  RecieveMentoring,
  getReceivedRequests,
  getSendedRequests,
} from '@/features/mentorings';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

type ReceivedRequest = {
  address?: any;
  applyStatus: 'WAITING' | 'COMPLETED';
  applyUuid: string;
  fromUuid: string;
  nickname: string;
  profileImageUrl: string | null;
  stacks: string[];
  githubAddress: string | null;
};

export default function MyPage() {
  const { userUuid } = useSelector(({ auth }) => auth);
  const { nickname, imageUrl } = useSelector(({ profile }) => profile);

  const router = useRouter();

  const [selectedType, setSelectedType] = useState('sended');

  const [sendedRequests, setSendedRequests] = useState<
    CancelMentoringRequestProps[]
  >([]);
  const [receivedRequests, setReceivedRequests] = useState<ReceivedRequest[]>(
    []
  );

  useEffect(() => {
    if (!userUuid) {
      router.push('/auth/login');
      return;
    }

    (async () => {
      const result = await getSendedRequests();
      setSendedRequests(result.data);
    })();
    (async () => {
      const result = await getReceivedRequests();
      console.log(result);
      setReceivedRequests(result.data);
    })();
  }, [router, userUuid]);

  const searchParams = useSearchParams();

  const tap = searchParams.get('tap');

  useEffect(() => {
    if (tap) {
      setSelectedType(tap);
    }
  }, [tap]);

  console.log(sendedRequests, receivedRequests);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Header title="마이페이지" rightbuttons={<></>} />
        <Inner>
          <Profile>
            <Infomations>
              <UserImage src={imageUrl ? imageUrl : NoProfileUser.src} />
              <TextInfomations>
                <Nickname>{nickname}</Nickname>
                {/* <Email>daga4242@gmail.com</Email> */}
              </TextInfomations>
            </Infomations>
            <Link href="/my-page/profile">
              <Button>프로필 보기</Button>
            </Link>
          </Profile>
          <Buttons>
            <Button
              isoutlined={selectedType === 'sended' ? false : true}
              onclick={() => setSelectedType('sended')}
              justifycontent="center"
            >
              보낸 멘토링 신청
            </Button>
            <Button
              isoutlined={selectedType === 'sended' ? true : false}
              onclick={() => setSelectedType('received')}
              justifycontent="center"
            >
              받은 멘토링 신청
            </Button>
          </Buttons>
          {selectedType === 'sended' ? (
            <Requests>
              {sendedRequests?.length ? (
                sendedRequests.map((request, i) => (
                  <CancelMentoringRequest
                    key={i}
                    postUuid={request.postUuid}
                    postTitle={request.postTitle}
                    postImageUrl={request.postImageUrl}
                    stacks={request.stacks}
                    address={request.address}
                    postType={request.postType}
                    unitTimeCount={request.unitTimeCount}
                    onOffline={request.onOffline}
                    applyStatus={request.applyStatus}
                    description={''}
                  />
                ))
              ) : (
                <Empty />
              )}
            </Requests>
          ) : (
            <Requests>
              {receivedRequests?.length ? (
                receivedRequests.map((request, i) => (
                  <RecieveMentoring
                    key={i}
                    nickname={request.nickname}
                    profileImageUrl={request.profileImageUrl}
                    stacks={request.stacks}
                    address={request.address}
                    githubAddress={request.githubAddress}
                    userUuid={request.fromUuid}
                    applyUuid={request.applyUuid}
                    applyStatus={request.applyStatus}
                  />
                ))
              ) : (
                <Empty />
              )}
            </Requests>
          )}
          <Buttons>
            <Logout />
            <DeleteAccount />
          </Buttons>
        </Inner>
      </MainLayout>
    </>
  );
}
