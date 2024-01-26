/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../PostCard/PostCard";

const Post = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 m-10">
        {users.map((user) => (
          <PostCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Post;
