import { axios } from '@/libraries/axios';

type deletePostProps = {
  postUuid: string;
};

export const deletePost = ({ postUuid }: deletePostProps) => {
  if (!postUuid) {
    return;
  }
  return axios.delete('/post-service/api/post', { params: { postUuid } });
};
