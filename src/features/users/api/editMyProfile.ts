import { axios } from '@/libraries/axios';

type editMyProfileProps = {
  nickname: string;
  introduction?: string;
  address?: string;
  profileImage?: string | null;
  stacks?: string[];
  githubAddress?: string;
};

export const editMyProfile = ({
  nickname,
  introduction = '',
  address = '',
  profileImage = null,
  stacks = [],
  githubAddress,
}: editMyProfileProps) => {
  console.log(profileImage);
  return axios.put('/profile-service/api/myprofile', {
    nickname: nickname,
    introduction,
    address,
    fileData: profileImage,
    stacks,
    profileType: 'MENTEE',
    githubAddress,
  });
};
