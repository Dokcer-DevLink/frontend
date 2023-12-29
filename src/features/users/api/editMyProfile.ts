import { axios } from '@/libraries/axios';

type editMyProfileProps = {
  nickname: string;
  introduction?: string;
  address?: string;
  profileImageUrl?: string;
  stacks?: string[];
};

export const editMyProfile = ({
  nickname,
  introduction,
  address,
  profileImageUrl,
  stacks,
}: editMyProfileProps) => {
  return axios.put('/profile-service/api/myprofile', {
    nickname: nickname,
    introduction,
    address,
    profileImageUrl,
    stacks,
  });
};
