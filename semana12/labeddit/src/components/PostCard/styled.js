import styled from "styled-components";

export const PostCardContainer = styled.div`
  max-width: 400px;
  margin: 10px;
  border: 1px solid #474749;
  box-shadow: 1px 1px 2px #474749;
`;

export const PostCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding: 12px;
`;

export const PostCardBody = styled(PostCardContent)`
  min-height: 120px;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const PostCardFeature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LikeDeslike = styled.div`
  span {
    margin-right: 7px;
  }
`;

export const ThumbButton = styled.span`
  cursor: pointer;
`;
