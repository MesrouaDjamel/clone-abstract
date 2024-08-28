import Image from "next/image"
import NavLinks from "./NavLinks";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" flex items-center justify-between h-16 pl-8 pr-4 bg-[hsl(26,20%,86%)] ">
      <span className="text-2xl cursor-pointer hover:text-Blue">
       <Link href={"/blog"}>Blog</Link> 
       
     </span>
      <div className="flex  h-full">
        <NavLinks />

        <div className="cursor-pointer relative  flex items-center justify-center w-20 hover:bg-[hsl(26,20%,76%)]">
            <Image
            src="/blogAssets/icon-ellipsis.svg"
            alt="logo"
            height={50}
            width={50}
            className="object-contain size-7"
            />
        </div>
      </div>

    </div>
  );
}

export default NavBar