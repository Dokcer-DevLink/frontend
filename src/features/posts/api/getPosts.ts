import { axios } from '@/libraries/axios';

type getPostsProps = {
  postType?: string;
  keyword?: string;
};

export const getPosts = ({ postType, keyword }: getPostsProps) => {
  return axios.get('/post-service/api/post/list', {
    params: { postType, keyword },
  });
};
