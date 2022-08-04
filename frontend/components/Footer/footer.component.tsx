import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SOCIAL_BUTTON_STYLE =
  "p-1 mx-1 bg-white drop-shadow-md hover:ring-blue-300 hover:ring-2 ring-0 transition-all";

export const Footer = () => (
  <footer className="flex p-5 justify-around items-center w-screen bg-gray-100">
    <div className="flex flex-col text-center">
      <Image src="/icon.svg" width="40px" height="40px" />
      <span className="mt-2 font-mono">Null Pointer Blog</span>

      <div className="flex justify-center my-3">
        <a href="#" className={SOCIAL_BUTTON_STYLE}>
          <FaLinkedinIn size={20} />
        </a>

        <a href="#" className={SOCIAL_BUTTON_STYLE}>
          <FaFacebookF size={20} />
        </a>

        <a href="#" className={SOCIAL_BUTTON_STYLE}>
          <FaTwitter size={20} />
        </a>

        <a href="#" className={SOCIAL_BUTTON_STYLE}>
          <FaYoutube size={20} />
        </a>
      </div>

      <span className="text-sm">
        Created by
        <a
          href="https://github.com/daempasha"
          className="text-blue-600 font-bold ml-1"
          target="_blank"
        >
          Daem Pasha
        </a>
      </span>
    </div>
  </footer>
);
