const Post = ({ post }) => {
  return (
    <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md ">
      <div className="mt-2">
        <h1 className="text-2xl text-sky-700 font-bold">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
