import { axios } from '@/libraries/axios';

type getPostsProps = {
  postType?: string;
  keyword?: string;
  page?: number;
};

export const getPosts = ({ postType, keyword, page }: getPostsProps) => {
  return axios.get('/post-service/api/post/list', {
    params: { postType, keyword, page },
  });
};
