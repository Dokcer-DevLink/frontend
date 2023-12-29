import { axios } from '@/libraries/axios';

type writePostProps = {
  postTitle: string;
  postImageUrl: string;
  postContent: string;
  stacks: string[];
  postType: 'MENTOR' | 'MENTEE';
  onOffline: 'ONLINE' | 'OFFLINE' | 'BOTH';
  address: string;
  runningTime: number;
};

export const writePost = ({
  postTitle,
  postImageUrl,
  postContent,
  stacks,
  postType,
  onOffline,
  address,
  runningTime,
}: writePostProps) => {
  console.log(
    postTitle,
    postImageUrl,
    postContent,
    stacks,
    postType,
    onOffline,
    address,
    runningTime
  );
  return axios.post('/post-service/api/post', {
    postCreateRequest: {
      postTitle,
      postImageUrl,
      postContent,
      stacks,
      postType,
      onOffline,
      address,
      runningTime,
    },
  });
};
