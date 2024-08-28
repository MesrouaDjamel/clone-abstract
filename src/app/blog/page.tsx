import NavBar from "@/components/blog/NavBar"
import Image from "next/image";
import { Nerko_One } from "next/font/google";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";

const nerko = Nerko_One({ subsets: ["latin"], weight: ["400"] });
const BlogPage = async () => {
  const response = await fetch("http://localhost:8000/Cards");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <NavBar />

      <div className="flex  justify-end ">
        <Image
          src={"/blogAssets/arrowLong.svg"}
          alt="image"
          width={75}
          height={20}
          className=" translate-x-16 translate-y-3 z-10 "
        />
        <div className="bg-[#ffb9ce] -z-10 max-w-[320px] rounded-b-xl ml-10  ">
          <p className={`${nerko.className} text-center px-2 py-4`}>
            Stories, news, and tips from behind the Artboards.
          </p>
        </div>
      </div>

      <div className="pt-20">
        <h2>How to collaborate with non-designers using Abstract</h2>
        <p>
          Feedback is key to making better products, when it&apos;s given in the
          right place, at the right time.
        </p>

        <p>
          Posted in{" "}
          <Link
            className="text-Blue hover:underline"
            href={"/category/product"}
          >
            Product
          </Link>{" "}
          by{" "}
          <Link
            className="text-Blue hover:underline"
            href={"/author/alden-spence"}
          >
            Alden Spence
          </Link>
        </p>
        <div>
          <Image
            src={"/blogAssets/camera.png"}
            alt=""
            width={200}
            height={200}
            className=""
          />
        </div>

        <div>
          <BlogCard
            image="/blogAssets/alison.png"
            postedIn={{ label: "Product", href: "/category/product" }}
            author={{ name: "Alden Spence", href: "/author/alden-spence" }}
            title="How to collaborate with non-designers using Abstract"
            desc="A guide to modern retros: how to host valuable project post-mortems"
          />
        </div>
      </div>
    </div>
  );
} 

export default BlogPage