import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../AuthorDate/authordate.component";
import sanityClient from "../../client";

export interface iAuthor {
  name: string;
}

export interface iPost {
  slug?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  height?: string;
  width?: string;
  author?: iAuthor;
  publishedAt?: string;
}

export interface iFeaturedPostApi {
  author: {
    name: string;
  };
  description: string;
  title: string;
  publishedAt: number;
  slug: string;
  imageUrl?: string;
  height?: string;
  width?: string;
}

export const FeaturedPost = ({
  author,
  title,
  description,
  publishedAt,
  slug,
  imageUrl,
  width = "400",
  height = "250",
}: iFeaturedPostApi) => {
  if (slug) {
    return (
      <div className="flex flex-col md:flex-row">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              className="rounded-md hover:opacity-60 hover:cursor-pointer transition-all "
              src={
                imageUrl ? imageUrl : `https://picsum.photos/${width}/${height}`
              }
              height={height}
              width={width}
            />
          </a>
        </Link>
        <div className="mt-2 md:mt-0 ml-0 md:ml-32 max-w-prose">
          <AuthorDate author={author.name} date={publishedAt} />
          <h1 className="my-2 text-2xl">{title}</h1>
          <span className="text-lg text-justify text-gray-600">
            {description}
          </span>
          <Link href={`/post/${slug}`}>
            <a className="mx-2 whitespace-nowrap text-blue-600 font-bold">
              Read more
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className=" bg-gray-300 rounded-md animate-pulse block w-[400px] h-[250px] mr-5"></div>

      <div className="flex flex-col gap-2">
        <div className=" bg-gray-300 animate-pulse block w-[400px] h-[20px]"></div>
        <div className=" bg-gray-300 animate-pulse block w-[400px] h-[20px]"></div>
        <div className=" bg-gray-300 animate-pulse block w-[400px] h-[190px]"></div>
      </div>
    </div>
  );
};
