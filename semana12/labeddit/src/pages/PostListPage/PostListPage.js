import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { InputsContainer } from "../LoginPage/styled";
import { PostListContainer } from "./styled";

const PostListPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([
    {
      id: "6503d483-68ee-4b96-b399-44cbb5e2041b",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam minima inventore, illum illo odit atque possimus quos magni nihil, omnis obcaecati reprehenderit ea vel! Enim vitae blanditiis cumque saepe!",
      title: "Primeiro",
      createdAt: "2021-05-28T12:55:10.785Z",
      userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
      voteSum: null,
      commentCount: null,
      userVote: 1,
    },
    {
      id: "6503d483-68ee-4b96-b399-22cbb5e2041b",
      body: "post",
      title: "Segundo",
      createdAt: "2021-05-28T12:55:10.785Z",
      userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
      voteSum: null,
      commentCount: 3,
      userVote: null,
    },
    {
      id: "6503d483-68ee-4b96-1111-44cbb5e2041b",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam minima inventore, illum illo odit atque possimus quos magni nihil, omnis obcaecati reprehenderit ea vel! Enim vitae blanditiis cumque saepe!",
      title: "Terceiro",
      createdAt: "2021-05-28T12:55:10.785Z",
      userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
      voteSum: null,
      commentCount: 1,
      userVote: null,
    },
  ]);

  const [form, onChange, clear] = useForm({ text: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newListPost = [...posts, form];
    setPosts(newListPost);
  };

  const postList = posts.map((post) => <PostCard key={post.id} post={post} />);

  return (
    <>
      <PostListContainer>
        <form onSubmit={onSubmitForm}>
          <InputsContainer>
            <input
              type="text"
              value={form.text}
              name={"text"}
              onChange={onChange}
            />
            <button>Enviar</button>
          </InputsContainer>
        </form>
        {postList}
      </PostListContainer>
      ;
    </>
  );
};

export default PostListPage;
