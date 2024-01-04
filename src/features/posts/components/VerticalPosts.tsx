import { Empty } from '@/components/Elements';
import { VerticalPost } from '.';
import { Wrapper } from './VerticalPosts.style';
import Link from 'next/link';
import { PostType } from '..';
import { useEffect, useState } from 'react';

type VerticalPostsProps = {
  posts: PostType[];
  observer?: React.ReactNode;
};

export const VerticalPosts = ({ posts, observer }: VerticalPostsProps) => {
  return (
    <Wrapper>
      {posts?.length ? (
        <>
          {posts.map((post, i) => (
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
                description={post.description}
              />
            </Link>
          ))}
          {observer}
        </>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
