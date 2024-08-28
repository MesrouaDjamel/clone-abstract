import Image from "next/image";
import BrandsComponents from "./BrandsComponents";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center xl:flex-row justify-center px-2 pt-20 bg-black lg:pl-24 lg:pr-0">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl xl:text-9xl xl:text-left text-center  text-white mb-10">
          True version control for Sketch files
        </h1>

        <div className="flex gap-4 mb-16">
          <button className=" text-xl px-8 py-4 text-white rounded-lg bg-Blue hover:bg-btnHover">
            Star Trial
          </button>
          <button className=" text-xl px-8 text-white rounded-lg border border-white hover:bg-white hover:text-black">
            Download
          </button>
        </div>

        <p className="text-xl mb-10 text-white text-center">
          1 in 3 Fortune 500 companies use Sketch + Abstract
        </p>

        {/* Container Brand */}
        <BrandsComponents/>
      </div>
      {/* Container Img */}
      <div className="relative h-[600px] xl:h-[500px]  py-10 bg-black">
        <Image
          src="/roma.jpg"
          alt="Image "
          height={400}
          width={400}
          className="object-cover rounded-lg xl:w-[900px] xl:h-[500px] "
        />
      </div>
    </section>
  );
}

export default HeroSection