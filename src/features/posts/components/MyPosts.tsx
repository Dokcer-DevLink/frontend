import React, { useState } from 'react';
import { HorizontalPostProps, VerticalPost, VerticalPostProps } from '.';
import { Buttons, Posts, Wrapper } from './MyPosts.style';
import { Button } from '@/components/Elements';

type PostsProps = {
  postsAsMentor: VerticalPostProps[];
  postsAsMentee: VerticalPostProps[];
};

export const MyPosts = ({ postsAsMentor, postsAsMentee }: PostsProps) => {
  const [isSelectedRoleEqualsMentor, setIsSelectedRoleEqualsMentor] =
    useState(true);

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
      <Posts>
        {isSelectedRoleEqualsMentor
          ? postsAsMentor.map((post, i) => (
              <VerticalPost
                key={i}
                title={post.title}
                image={post.image}
                skill={post.skill}
                region={post.region}
              />
            ))
          : postsAsMentee.map((post, i) => (
              <VerticalPost
                key={i}
                title={post.title}
                image={post.image}
                skill={post.skill}
                region={post.region}
              />
            ))}
      </Posts>
    </Wrapper>
  );
};
