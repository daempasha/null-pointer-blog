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
    <div>
      <Head>
        <title>Null Pointer Blog</title>
        <meta name="description" content="Null Pointer Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <div className="p-5 bg-primary bg-opacity-5 ">
          <div className="mx-auto max-w-7xl px-10">
            <div className="uppercase text-gray-700 text-sm mb-5 tracking-wider ">
              Featured Post
            </div>
            <FeaturedPost {...featuredPost} />
          </div>
        </div>

        <div className="flex mx-auto max-w-7xl flex-wrap gap-x-40">
          {allPosts?.map((post) => (
            <PostCard {...post} />
          ))}
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
      publishedAt
    }[0]`
  );

  const allPosts = await client.fetch(
    groq`*[_type=="post" && featuredPost == false] | order(publishedAt){
      title,
      author->,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      description,
      publishedAt
    }`
  );

  return {
    props: {
      featuredPost,
      allPosts,
    },
  };
};

export default Home;
