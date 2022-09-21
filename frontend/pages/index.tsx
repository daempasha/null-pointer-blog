import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import client from "../client";
import { AuthorDate } from "../components/AuthorDate/authordate.component";
import {
  FeaturedPost,
  iPost,
} from "../components/FeaturedPost/featuredpost.component";
import { Footer } from "../components/Footer/footer.component";
import { Navbar } from "../components/Navbar/navbar.component";
import { PostCard } from "../components/PostCard/postcard.component";
import groq from "groq";
import Post from "./post/[slug]";

interface iParams {
  allPosts?: any[];
  featuredPost?: any;
}

const Home: NextPage = ({ allPosts, featuredPost }: iParams) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Null Pointer Blog</title>
        <meta name="description" content="Null Pointer Blog" />k
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-grow flex flex-col">
        <div className="p-5 bg-primary dark:bg-gray-800 dark:text-gray-200 bg-opacity-5 ">
          <div className="mx-auto max-w-7xl px-10">
            <div className="uppercase text-gray-700 dark:text-gray-300 text-sm mb-5 tracking-wider ">
              Featured Post
            </div>
            <FeaturedPost {...featuredPost} />
          </div>
        </div>

        <div className="dark:bg-gray-900 flex-grow">
          <div className="flex mx-auto max-w-7xl flex-wrap gap-x-40">
            {allPosts?.map((post) => (
              <PostCard key={post.title} {...post} />

            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPost = await client.fetch(
    groq`*[_type=="post" && featuredPost == true] | order(publishedAt){
      title,
      author->,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      description,
      publishedAt,
      categories[] -> {
        title,
        slug
      }
    }[0]`
  );

  const allPosts = await client.fetch(
    groq`*[_type=="post" && featuredPost == false] | order(publishedAt){
      title,
      author->,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      description,
      publishedAt,
      categories[] -> {
        title,
        slug
      }
    }`
  );

  return {
    props: {
      featuredPost,
      allPosts,
    },
    revalidate: 60
  };
};

export default Home;
