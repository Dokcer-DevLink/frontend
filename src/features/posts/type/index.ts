export type PostType = {
  description: string;
  postUuid: any;
  postImageUrl?: string | null;
  postTitle?: string;
  stacks?: [];
  address?: any;
  postType: 'MENTOR' | 'MENTEE';
  postContent?: string;
  unitTimeCount: number;
  onOffline: 'OFFLINE' | 'ONLINE';
  postStatus?: 'WAITING' | 'COMPLETED';
};
