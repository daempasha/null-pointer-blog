import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="p-5 flex items-center justify-between">
      <Link href={"/"}>
        <a>
          
      <span className="flex items-center">
        <Image src="/icon.svg" height="30px" width="30px" />
        <span className="text-primary ml-2">Null Pointer</span>
      </span>
        </a>
      </Link>

    </nav>
  );
};
