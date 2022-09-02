import groq from "groq";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import client from "../../client";
import { iPost } from "../../components/FeaturedPost/featuredpost.component";
import { Navbar } from "../../components/Navbar/navbar.component";



const Post = ({post}: {post: iPost}) => {
  const router = useRouter();

  useEffect(() => console.log(post), [post])
  return (
    <article>
      <Navbar />
      <div className="flex mx-auto max-w-7xl justify-center">

      <h1>{post.title}</h1>
      </div>
    </article>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )


  return {
    paths: paths.map((slug: any) => ({params: {slug}})),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug ? context.params.slug : "";
  const post = await client.fetch(`
  *[_type == "post" && slug.current == $slug][0]{
    title,

  }`, {slug})

  return {
    props: {
      post
    }
}
}

export default Post;
