import { axios } from '@/libraries/axios';

type writePostProps = {
  postTitle: string;
  postImage: string;
  postContent: string;
  stacks: string[];
  postType: 'MENTOR' | 'MENTEE';
  onOffline: 'ONLINE' | 'OFFLINE' | 'BOTH';
  address: string;
  runningTime: number;
};

export const writePost = ({
  postTitle,
  postImage,
  postContent,
  stacks,
  postType,
  onOffline,
  address,
  runningTime,
}: writePostProps) => {
  return axios.post('/post-service/api/post', {
    postTitle,
    postImage,
    postContent,
    stacks,
    postType,
    onOffline,
    address,
    unitTimeCount: runningTime,
  });
};
