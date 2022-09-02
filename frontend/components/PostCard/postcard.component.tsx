import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../AuthorDate/authordate.component";
import { iPost } from "../FeaturedPost/featuredpost.component";

export const PostCard = ({
  imageUrl,
  slug,
  height = "250",
  width = "400",
  title,
  description,
  author,
  publishedAt,
}: iPost) => (
  <div className="p-10 w-[500px] mx-auto md:mx-0">
    <Link href={`/post/${slug}`}>
      <a>
        <Image
          className="rounded-md hover:opacity-60 hover:cursor-pointer transition-all"
          src={imageUrl ? imageUrl : `https://picsum.photos/${width}/${height}`}
          height={height}
          width={width}
        />
      </a>
    </Link>

    <h1 className="text-xl">{title}</h1>
    {author && publishedAt && (
      <AuthorDate author={author.name} date={publishedAt} />
    )}
    <span className="text-lg text-justify text-gray-600">{description}</span>
    <Link href={`/post/${slug}`}>
      <a className="mx-2 whitespace-nowrap text-blue-600 text-sm font-bold">
        Read more
      </a>
    </Link>
  </div>
);
