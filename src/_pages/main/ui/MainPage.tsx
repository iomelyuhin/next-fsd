import { GetStaticProps } from "next";
import Image from "next/image";
import { fetchAPI } from "shared/api/blogApi";
import cls from "./MainPage.module.scss";

type Post = {
  id: number;
  title: string;
  content: string;
};

type BlogProps = {
  posts: Post[];
};

const MainPage = ({ posts }: BlogProps) => {
  const postss = fetchAPI("/blog", "en");
  console.log(postss);

  if (!posts || posts.length === 0) {
    return (
      <main className={cls.main}>
        <Image
          src="/next_server/icons/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>Main page</div>
        <div>No posts available</div>
      </main>
    );
  }

  return (
    <main className={cls.main}>
      <Image
        src="/next_server/icons/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <div>Main page</div>
      <div>
        <h1>Blog</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await fetchAPI("/blog", locale || "en");
  console.log(posts);

  return {
    props: { posts },
  };
};

export default MainPage;
