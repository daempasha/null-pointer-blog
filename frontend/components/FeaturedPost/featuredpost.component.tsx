import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../AuthorDate/authordate.component";

export interface iPost {
  title: string;
  description: string;
  image: string;
  height?: string;
  width?: string;
  author: string;
  date: number;
}

export const FeaturedPost = ({
  title,
  description,
  image,
  height = "250px",
  width = "400px",
}: iPost) => {
  return (
    <div className="flex">
      <Image className="rounded-md hover:opacity-60 hover:cursor-pointer transition-all" src={image} height={height} width={width} />
      <div className="ml-32 max-w-prose">
        <AuthorDate author="Daem Pasha" date={1659562791} />
        <h1 className="my-2 text-2xl">{title}</h1>
        <span className="text-lg text-justify text-gray-600">
          {description}
        </span>
        <Link href="#">
          <a className="mx-2 whitespace-nowrap text-blue-600 font-bold">
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
};
