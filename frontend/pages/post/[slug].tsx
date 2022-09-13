import groq from "groq";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import client from "../../client";
import { AuthorDate } from "../../components/AuthorDate/authordate.component";
import { iPost } from "../../components/FeaturedPost/featuredpost.component";
import { Navbar } from "../../components/Navbar/navbar.component";
import { PortableText } from '@portabletext/react'
import { AiOutlineMail } from "react-icons/ai"
const components = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const Post = ({ title, imageUrl, author, publishedAt, height = "500", width = "800", description, body }: { [key: string]: any }) => {
  const router = useRouter();

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <article className="mx-auto max-w-7xl" >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl my-2 dark:text-white">
            {title}
          </h1>
          {author && publishedAt &&
            (<AuthorDate author={author.name} date={publishedAt} />)
          }
        </div>
        <div className="border-b-2 my-5 dark:border-gray-800" />
        <div className="flex">
          <div className="sticky top-5 h-fit ">
            <div className="flex justify-around">
              <FaFacebook className="ml-0 m-1 text-[#4267B2]" size={30} />
              <FaTwitter className="m-1 text-[#50ABF1]" size={30} />
              <FaLinkedin className="m-1 text-[#0A66C2]" size={30} />
              <FaYoutube className="mr-0 m-1  text-[#FE0000]" size={30} />
            </div>
            <p className="mt-5 mb-2 text-gray-600 dark:text-gray-400 font-semibold">
              Sign up for our monthly newsletter
            </p>


            <input className=" bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-800 px-5 py-1 outline-none focus:ring-2  transition-all delay-75 text-gray-700 dark:text-gray-200" />
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 transition-all ease-in-out text-white w-full py-1 px-2 mt-2 outline-none focus:ring-2">
              <AiOutlineMail size={20} />
              <span className="text-center flex-1 ">
                Subscribe

              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center mx-10 my-5 w-full font-serif">
            <Image
              className="rounded-md hover:opacity-60 hover:cursor-pointer transition-all "
              src={
                imageUrl ? imageUrl : `https://picsum.photos/${width}/${height}`
              }
              height={height}
              width={width}
            />
            <div className=" my-5  text-sm text-gray-600 dark:text-gray-400 ">{description}</div>
            <div className="text-gray-700 dark:text-gray-300">
              <PortableText value={body} components={components} />,
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug ? context.params.slug : "";
  const post = await client.fetch(
    `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    author->,
    "imageUrl": mainImage.asset->url,
    description,
    body,
    publishedAt

  }`,
    { slug }
  );

  return {
    props: {
      ...post,
    },
  };
};

export default Post;
