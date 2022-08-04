import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../AuthorDate/authordate.component";

interface iFeaturedPost {
  title: string;
  image: string;
  height?: string;
  width?: string;
  author: string;
  date: number;
}

export const FeaturedPost = ({
  title,
  image,
  height = "250px",
  width = "400px",
}: iFeaturedPost) => {
  return (
    <div className="flex">
      <Image className="rounded-md" src={image} height={height} width={width} />
      <div className="ml-32 max-w-prose">
        <AuthorDate author="Daem Pasha" date={1659562791} />
        <h1 className="my-2 text-2xl">{title}</h1>
        <span className="text-lg text-justify text-gray-600">
          Whether your new to Python or an experienced veteran, this article
          will contain some tips and tricks for everyone...
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
