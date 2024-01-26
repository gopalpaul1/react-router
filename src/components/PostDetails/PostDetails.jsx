// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const userDetails = useLoaderData();

  return (
    <div className="bg-emerald-200 m-20 p-4 w-80">
      <h1 className="text-2xl text-purple-800">User Details</h1>
      <div className="bg-teal-400 bg-opacity-20 rounded-lg p-4 text-white font-bold border-2">
        <p> {userDetails.company.name}</p>
        <p>{userDetails.company.catchPhrase}</p>
        <p>{userDetails.company.bs}</p>
      </div>
    </div>
    
  );
};

export default PostDetails;
