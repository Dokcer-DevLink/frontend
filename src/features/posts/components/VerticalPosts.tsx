import { Empty } from '@/components/Elements';
import { VerticalPost } from '.';
import { Wrapper } from './VerticalPosts.style';
import Link from 'next/link';
import { PostType } from '..';

type VerticalPostsProps = {
  posts: PostType[];
};

export const VerticalPosts = ({ posts }: VerticalPostsProps) => {
  return (
    <Wrapper>
      {posts?.length ? (
        posts.map((post, i) => (
          <Link key={i} href={`/post/${post.postUuid}`}>
            <VerticalPost
              postUuid={post.postUuid}
              postTitle={post.postTitle}
              postImageUrl={post.postImageUrl}
              stacks={post.stacks}
              address={post.address}
              postType={post.postType}
              unitTimeCount={post.unitTimeCount}
              onOffline={post.onOffline}
            />
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
