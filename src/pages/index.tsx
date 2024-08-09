import { Inter } from "next/font/google";
import * as contentful from "contentful";
import Blog from "../components/blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { posts: any }) {
  return (
    <main
      className={`h-screen w-screen flex justify-center items-center flex-col gap-8 ${inter.className}`}
    >
      <h1 className="text-center text-5xl">This is a Blog Website</h1>
      <div className="grid grid-cols-3 gap-4">
        {props.posts.map((post: any) => (
          <Blog
            key={post.url}
            title={post.title}
            image={post.image?.fields.file.url}
            description={post.description}
            url={post.url}
          />
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const res = await client.getEntries({ content_type: "blog" });

  const posts = res.items.map((item) => {
    return {
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.image || null,
      url: item.fields.url,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
