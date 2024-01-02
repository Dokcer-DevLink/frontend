import { axios } from '@/libraries/axios';

type editPostProps = {
  postTitle: string;
  postImage: string;
  postContent: string;
  stacks: string[];
  postType: 'MENTOR' | 'MENTEE';
  onOffline: 'ONLINE' | 'OFFLINE' | 'BOTH';
  address: string;
  runningTime: number;
  postStatus?: 'WAITING' | 'COMPLETED';
  postUuid: string;
};

export const editPost = ({
  postTitle,
  postImage,
  postContent,
  stacks,
  postType,
  onOffline,
  address,
  runningTime,
  postStatus,
  postUuid,
}: editPostProps) => {
  return axios.put('/post-service/api/post', {
    postUuid,
    postTitle,
    postImage,
    postContent,
    stacks,
    postType,
    onOffline,
    address,
    unitTimeCount: runningTime,
    postStatus,
  });
};
