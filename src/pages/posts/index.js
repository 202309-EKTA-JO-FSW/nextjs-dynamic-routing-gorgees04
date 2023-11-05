import Link from "next/link";

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getStaticProps = async () => {
  const res = await fetch(ALL_POSTS_URL);
  const repo = await res.json();
  return { props: { repo } };
};

const Posts = ({ repo }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className=" text-5xl text-white ">Posts</h1>
      {repo.map((post) => {
        return (
          <Link
            className=" w-[500px] p-5 m-5 text-lg rounded-lg shadow-md bg-white hover:border-l-4 border-sky-300 font-bold"
            key={post.id}
            href={"/posts/" + post.id}
          >
            {post.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;

{
  /* <Post post={post} key={post.id} />; */
}
