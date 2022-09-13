import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/themeswitcher.component";

export const Navbar = () => {
  return (
    <div className="dark:bg-gray-900">

      <nav className="mx-auto p-5 flex max-w-7xl items-center justify-between">
        <Link href={"/"}>
          <a>

            <span className="flex items-center">
              <Image src="/icon.svg" height="30px" width="30px" />
              <span className="text-primary ml-2">Null Pointer</span>
            </span>
          </a>
        </Link>
        <ThemeSwitcher />
      </nav>
    </div>

  );
};
