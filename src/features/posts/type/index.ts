export type PostType = {
  postUuid: any;
  postImageUrl?: string | null;
  postTitle?: string;
  stacks?: [];
  address?: string;
  postType: 'MENTOR' | 'MENTEE';
  postContent?: string;
  unitTimeCount: number;
  onOffline: 'OFFLINE' | 'ONLINE';
  postStatus?: 'WAITING' | 'COMPLETED';
};
