import Image from "next/image";
import Link from "next/link";

type TAuthor = {
  name: string;
  href: string;
};

type TPostedIn = {
  Category: string;
  href: string;
};
type BlogCardProps = {
  image: string;
  postedIn: TPostedIn;
  author: TAuthor;
  title: string;
  desc: string;
};
const BlogCard = ({ image, postedIn, author, title, desc }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          className="bg-black object-cover w-full rounded-lg"
        />
      </div>
      <p className="text-sm">
        Posted in{" "}
        <Link href={`${postedIn.href}`} className="text-Blue hover:underline">
          {postedIn.Category}
        </Link>{" "}
        by{" "}
        <Link
          href={`${author.href}`}
          className="text-Blue hover:underline"
        >
          {author.name}
        </Link>
      </p>
        <h2 className="text-2xl">{title}</h2>
        <p>{desc}</p>
    </div>

  );
};

export default BlogCard;
