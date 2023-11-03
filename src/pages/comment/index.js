import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="max-w-3xl px-10 my-4 py-6 bg-white rounded-lg shadow-md text-sm">
      <div className="mt-2">
        <h1 className="text-2xl text-gray-700 font-bold hover:text-gray-600">
          {comment.name}
        </h1>
        <p>{comment.email}</p>
        <p className="mt-2 text-gray-600">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
