import Image from "next/image"

const Header = () => {
  return (
   <header className="flex items-center justify-between p-5 bg-black lg:px-20">
        <div className="flex items-center gap-2">
            <Image  src="/Logo.svg" alt="logo" width={32} height={32}/>
            <span className="text-white font-semibold text-xl">Abstract</span>
        </div>

        <button className="border-none px-5 p-2 text-btnColor  hover:text-Blue">Sign in </button>
   </header>
  )
}

export default Header