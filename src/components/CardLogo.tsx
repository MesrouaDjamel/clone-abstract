import Image from "next/image";
import React from "react";

const CardLogo = ({
  image,
  title,
  labelSvg,
  labelPng,
  bgColor,
}: {
  image: string;
  title: string;
  labelSvg: string;
  labelPng: string;
  bgColor: string;
}) => {
  return (
    <div className="relative border min-w-[300px]  border-black ">
      <div className={` py-4 ${bgColor} border flex items-center justify-center  border-b-black relative`}>
        <Image
          src={image}
          alt="image"
          // fill
          height={100}
          width={100}
          className="object-center size-36 "
        />
      </div>

      <div className="flex justify-between   ">
        <span className="font-bold p-2">{title}</span>
        <div className="flex items-center gap-2 border border-l-black">
          <span className="text-Blue cursor-pointer p-2">{labelPng}</span>
          <span className="text-Blue cursor-pointer border p-2 border-l-black">
            {labelSvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardLogo;
