import React from "react";
import {
  LikeDeslike,
  PostCardBody,
  PostCardContainer,
  PostCardContent,
  PostCardFeature,
  ThumbButton,
} from "./styled";

const PostCard = ({ post }) => {
  return (
    <PostCardContainer>
      <PostCardContent>{post.title}</PostCardContent>
      <hr style={{ margin: 0 }} />
      <PostCardBody>{post.body}</PostCardBody>
      <hr style={{ margin: 0 }} />
      <PostCardContent>
        <PostCardFeature>
          <LikeDeslike>
            <ThumbButton>👍</ThumbButton>
            <span>{post.userVote === null ? "0" : post.userVote}</span>
            <ThumbButton>👎</ThumbButton>
          </LikeDeslike>
          <div>
            {post.commentCount > 1
              ? `${post.commentCount} comentários`
              : post.commentCount === null
              ? "0 comentário"
              : "1 comentário"}
          </div>
        </PostCardFeature>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PostCard;
