"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

interface ILink {
  label: string;
  href: string;
}
const Card = ({
  image,
  CardTitle,
  CardDesc,
  CardLink,
}: {
  image: string;
  CardTitle: string;
  CardDesc: string;
  CardLink: ILink;
}) => {
        const { label, href } = CardLink;
        const router = useRouter();

  return (
    <div onClick={() => router.push(href)} className="border border-black mx-4 cursor-pointer max-w-[350px]   ">
      {/* Container Img */}
      <div>
        <Image
          src={image}
          alt={CardTitle}
          height={192}
          width={370}
          className="object-contain w-full"
        />
      </div>

      <div className="flex  md:flex-col border-b border-b-black">
        <h2 className="flex-1 text-xl font-semibold p-2 border-r border-r-black">
          {CardTitle}
        </h2>
        <p className="flex-1 p-4 text-sm">{CardDesc}</p>
      </div>
      <div className="p-2">
        <Link className=" text-Blue underline" href={href}>
          {label}
        </Link>
      </div>
    </div>
  );
};

export default Card