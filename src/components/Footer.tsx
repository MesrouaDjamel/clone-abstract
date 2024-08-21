import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const datasFooter = [
    {
      title: "Resources",
      links: [
        {
          label: "Blog",
          href: "/",
        },
        {
          label: "Help Center",
          href: "/",
        },
        {
          label: "Contact Support",
          href: "/",
        },
        {
          label: "Release Notes",
          href: "/",
        },
        {
          label: "Status",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          href: "/",
        },
        {
          label: "Carrers",
          href: "/",
        },
        {
          label: "Legal",
          href: "/",
        },
        {
          label: "Privacy",
          href: "/",
        },
        {
          label: "Website Terms of Use",
          href: "/",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          label: "Twitter",
          href: "/",
        },
        {
          label: "LinkedIn",
          href: "/",
        },
        {
          label: "Facebook",
          href: "/",
        },
        {
          label: "Dribble",
          href: "/",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          label: "Email",
          href: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-black px-5 py-16 flex flex-col ">
      <div className="flex items-center gap-2 pb-12">
        <Image src="/Logo.svg" alt="logo" width={32} height={32} />
        <span className="text-white font-semibold text-3xl">Abstract</span>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:mx-24">
        {datasFooter.map((dataFooter, index) => (
          <li key={index}>
            <h1 className="text-white font-bold ">{dataFooter.title}</h1>
            <ul>
              {dataFooter.links.map((link, index) => (
                <li className="text-white" key={link.href}>
                  <Link
                    className="hover:text-white text-[#8b8e8f] text-sm"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="text-white font-light text-sm text-center pt-12">
        © CopyRight 2024 Abstract Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
