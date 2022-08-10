import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../AuthorDate/authordate.component";
import { iPost } from "../FeaturedPost/featuredpost.component";

type iPostCard = iPost & {
  height?: string;
  width?: string;
};

export const PostCard = ({
  height = "250px",
  width = "400px",
  title,
  description,
  author,
  publishedAt,
  slug,
  imageUrl,
}: iPostCard) => (
  <div className="p-10 w-[500px] mx-auto md:mx-0">
    {imageUrl && (
      <Link href={`/post/${slug}`}>
        <Image
          className="rounded-md hover:opacity-60 hover:cursor-pointer transition-all "
          src={imageUrl}
          height={height}
          width={width}
        />
      </Link>
    )}
    <h1 className="text-xl">{title}</h1>
    <AuthorDate author={author?.name} date={publishedAt} />
    <span className="text-lg text-justify text-gray-600">{description}</span>
    <Link href="#">
      <a className="mx-2 whitespace-nowrap text-blue-600 text-sm font-bold">
        Read more
      </a>
    </Link>
  </div>
);
