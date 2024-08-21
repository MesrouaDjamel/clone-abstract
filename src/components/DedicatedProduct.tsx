import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const DedicatedProduct = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <article className="bg-[#f6f7f7] grid grid-cols-1 gap-6 justify-items-center py-12">
      <h2 className=" text-5xl pb-4 text-center">{title}</h2>
      <p className="text-center">{desc}</p>

      <div className="grid grid-cols-1 justify-items-center  gap-6 md:grid-cols-3 md:gap-0 lg:mx-28">
        <Card
          image="/Illustration1.png"
          CardTitle="Costumer Spotlight"
          CardDesc="Empowering design teams and transforming workflows with Abstract"
          CardLink={{ label: "Read their stories", href: "/" }}
        />

        <Card
          image="/Illustration2.png"
          CardTitle="Design Inspiration"
          CardDesc="Scaling design ops, collaboration, and the impact of desgn"
          CardLink={{ label: "Get Inspired", href: "/" }}
        />

        <Card
          image="/illustration3.png"
          CardTitle="Our Blog"
          CardDesc="Stories, news, and tips from behind the Artboards"
          CardLink={{ label: "Browse Abstract's", href: "/" }}
        />
      </div>
    </article>
  );
};

export default DedicatedProduct;
