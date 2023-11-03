import Post from "../post";
import Comment from "../comment";

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getStaticPaths = async () => {
  const res = await fetch(ALL_POSTS_URL);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);

  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  const resComment = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  );
  const comments = await resComment.json();

  return { props: { post: data, comments: comments } };
};

const PostInfo = ({ post, comments }) => {
  return (
    <div className="flex items-center flex-col m-10">
      <h1 className="text-4xl font-bold py-5">Post</h1>
      <Post post={post} />
      <div className=" border-b-2 border-gray-400 w-96 py-10"></div>
      <h1 className="text-2xl font-bold pt-24">Comments</h1>
      <div className=" text-red-600">
        {comments.map((comment) => {
          console.log(comment.postId);

          if (post.userId === comment.postId) {
            return <Comment comment={comment} />;
          }
        })}
      </div>
    </div>
  );
};

export default PostInfo;
