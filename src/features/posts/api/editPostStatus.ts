import { axios } from '@/libraries/axios';

type editPostStatusProps = {
  postUuid: string;
  postStatus: 'WAITING' | 'COMPLETED';
};

export const editPostStatus = ({
  postUuid,
  postStatus,
}: editPostStatusProps) => {
  return axios.put('/post-service/api/post/status', {
    postUuid,
    postStatus,
  });
};
