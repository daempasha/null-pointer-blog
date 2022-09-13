import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SOCIAL_BUTTON_STYLE =
  "p-1 mx-1 bg-white dark:bg-gray-900 drop-shadow-md hover:ring-blue-300 hover:ring-2 ring-0 transition-all";

interface iSocial {
  key: string;
  icon: ReactNode
}

export const Footer = () => {
  const socials: iSocial[] = [
    { key: "linkedin", icon: < FaLinkedinIn size={20} /> },
    { key: "facebook", icon: < FaFacebookF size={20} /> },
    {
      key: "twitter", icon: <FaTwitter size={20} />
    },
    { key: "youtube", icon: <FaYoutube size={20} /> }
  ]
  return (
    <footer className="flex p-5 justify-around items-center w-screen bg-gray-100 dark:bg-gray-800 dark:text-white">

      <div className="flex flex-col text-center">
        <Image src="/icon.svg" width="40px" height="40px" />
        <span className="mt-2 font-mono">Null Pointer Blog</span>

        <div className="flex justify-center my-3">
          {socials.map(social => (
            <a href="#" key={social.key} className={SOCIAL_BUTTON_STYLE}>
              {social.icon}
            </a>
          ))}



        </div>

        <span className="text-sm">
          Created by
          <a
            href="https://github.com/daempasha"
            className="text-blue-600 dark:text-blue-500 font-bold ml-1"
            target="_blank"
            rel="noreferrer"
          >
            Daem Pasha
          </a>
        </span>
      </div>
    </footer>
  )
};
