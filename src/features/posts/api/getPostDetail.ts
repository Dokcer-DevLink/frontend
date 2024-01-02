import { axios } from '@/libraries/axios';

type getPostDetailProps = {
  postUuid: string;
};

export const getPostDetail = ({ postUuid }: getPostDetailProps) => {
  return axios.get('/post-service/api/post', { params: { postUuid } });
};
