import Image from "next/image";

const Advantages = ({image,title,desc}:{
    image:string,
    title:string,
    desc:string,
}) => {
  return (
    <article className="flex flex-col  items-start pb-12 relative">
      
        <Image src={image} alt={title} height={50} width={50 }
            className=" pb-4"
        />
      <h2 className="font-semibold text-xl pb-4">{title}</h2>
      <p>
        {desc}
      </p>
    </article>
  );
}

export default Advantages