import Link from "next/link";

const NavLinks = () => {
    const navLinks = [
      { label: "Product", href: "/category/product" },
      { label: "Inspiration", href: "/category/inspiration" },
      { label: "Inside Abstract", href: "/category/inside-abstract" },
      { label: "Customer Stories", href: "/category/customer-stories" },
    ];
  return (
    <ul
      className="hidden md:flex flex-row items-center 
     "
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            className="hover:bg-[hsl(26,20%,76%)] p-5  border-r-2 border-[hsl(26,20%,76%)]"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks