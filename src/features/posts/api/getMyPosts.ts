import { axios } from '@/libraries/axios';

type getMyPostsProps = {
  postType: 'MENTOR' | 'MENTEE';
};

export const getMyPosts = ({ postType }: getMyPostsProps) => {
  return axios.get('/post-service/api/post/my', {
    params: {
      postType,
    },
  });
};
