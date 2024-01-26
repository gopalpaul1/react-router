/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ user }) => {
  const { name, id, email } = user;
  return (
    <div className="border-2 border-purple-800 rounded-md p-4">
      <h4 className="text-purple-700 text-2xl font-bold">{name}</h4>
      <p className="text-purple-700 font-bold ">Email: {email}</p>
      <Link className="p-2 border-2 mr-2 font-bold rounded-lg" to={`/post/${id}`}>User Details</Link>
      <Link to={`/post/${id}`}>
        <button className="border-2 border-purple-700 rounded-lg text-purple-700 p-2 font-bold hover:bg-purple-700 hover:text-white mt-4">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
