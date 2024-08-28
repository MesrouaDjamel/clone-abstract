import Image from "next/image";

const BrandsComponents = () => {
  return (
    <div className="grid grid-cols-3 pb-12 md:grid-cols-5 relative justify-center  w-full  gap-6 ">
      <div className="w-[150px] flex items-center justify-start">
        <Image
          src="/wayfair.svg"
          alt="logo"
          height={100}
          width={90}
          className="object-cover "
        />
      </div>

      <div className="w-[150px] flex items-center justify-start">
        <Image
          src="/cisco.svg"
          alt="logo"
          height={100}
          width={80}
          className="object-cover "
        />
      </div>

      <div className="w-[150px] flex items-center justify-start ">
        <Image
          src="/zendesk.svg"
          alt="logo"
          height={100}
          width={90}
          className="object-cover "
        />
      </div>

      <div className="w-[150px] flex items-center justify-center ">
        <Image
          src="/microsoft.svg"
          alt="logo"
          height={100}
          width={100}
          className="object-cover "
        />
      </div>

      <div className="w-[150px] flex items-center justify-end">
        <Image
          src="/docusign.svg"
          alt="logo"
          height={100}
          width={100}
          className="object-cover "
        />
      </div>
    </div>
  );
}

export default BrandsComponents