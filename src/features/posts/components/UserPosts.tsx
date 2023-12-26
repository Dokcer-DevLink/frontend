import React, { useEffect, useState } from 'react';
import { HorizontalPostProps, VerticalPost, VerticalPostProps } from '.';
import { Buttons, Posts, Wrapper } from './UserPosts.style';
import { Button, Empty } from '@/components/Elements';
import Link from 'next/link';

type PostsProps = {
  postsAsMentor: VerticalPostProps[];
  postsAsMentee: VerticalPostProps[];
};

export const UserPosts = ({ postsAsMentor, postsAsMentee }: PostsProps) => {
  const [isSelectedRoleEqualsMentor, setIsSelectedRoleEqualsMentor] =
    useState(true);

  const [posts, setPosts] = useState(postsAsMentor);

  useEffect(() => {
    if (isSelectedRoleEqualsMentor) {
      setPosts(postsAsMentor);
    } else {
      setPosts(postsAsMentee);
    }
  }, [isSelectedRoleEqualsMentor]);

  return (
    <Wrapper>
      <Buttons>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(true)}
          justifycontent="center"
          variant="secondary"
          isoutlined={!isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          멘토로 작성한 게시글
        </Button>
        <Button
          onclick={() => setIsSelectedRoleEqualsMentor(false)}
          justifycontent="center"
          variant="secondary"
          isoutlined={isSelectedRoleEqualsMentor}
          borderradius="0"
        >
          멘티로 작성한 게시글
        </Button>
      </Buttons>
      {posts.length ? (
        <Posts>
          {posts.map((post, i) => (
            <Link key={i} href={`/post/${post.id}`}>
              <VerticalPost
                key={i}
                id={post.id}
                title={post.title}
                image={post.image}
                skill={post.skill}
                region={post.region}
              />
            </Link>
          ))}
        </Posts>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};
