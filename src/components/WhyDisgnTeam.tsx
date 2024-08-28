import Image from "next/image";
import Link from "next/link";
import Card from "./Card";


const WhyDisgnTeam = ({title,desc}:{
    title:string,
    desc?:string,  
    
}) => {
  return (
    <article className="bg-white  pb-24 ">
      <h2 className="font-semibold text-5xl py-16 text-center">{title}</h2>

      <div className=" grid grid-cols-1 justify-items-center  gap-6 md:grid-cols-3 md:gap-0 lg:mx-28">
        <Card
          image="/SaleForcePic.png"
          CardTitle="Design system management"
          CardDesc="How Cisco built an entreprise global design system"
          CardLink={{ label: "Read Cisco's Story", href: "/" }}
        />

        <Card
          image="/SaleForcePic.png"
          CardTitle="Radical transparency"
          CardDesc="How designers at Saleforce fostered trust and teamwork"
          CardLink={{ label: "Read Saleforce's Story", href: "/" }}
        />

        <Card
          image="/BannerHealthPic.png"
          CardTitle="Remote collaboration"
          CardDesc="How Banner Health is navigating the remote future no one planned for"
          CardLink={{ label: "Read Banner Health's Story", href: "/" }}
        />
      </div>
    </article>
  );
}

export default WhyDisgnTeam