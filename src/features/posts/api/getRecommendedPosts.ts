import { axios } from '@/libraries/axios';

type getRecomendedPostsProps = {
  postType: string;
};

export const getRecomendedPosts = ({ postType }: getRecomendedPostsProps) => {
  return axios.get(`/post-service/api/post/recommend`, {
    params: { postType },
  });
};
