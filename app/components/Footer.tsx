import React from "react";
import Link from "next/link";
import Image from "next/image";
import gradient from '@/public/gradient.png'

import arrow from "@/public/arrow.svg";

const socialLinks = [
  ["https://www.twitter.com/gambhir_sharma", "Twitter"],
  ["https://www.github.com/gambhirsharma", "GitHub"],
  ["https://www.instagram.com/gambhir__sharma", "Instagram"],
  ["https://www.codepen.io/gambhir_sharma", "CodePen"],
];

function Footer() {
  return (
    <footer
      className="border-gray-600 border-t flex items-center justify-between py-5 mt-44 px-4 flex-col md:flex-row relative"
    >
      <Image src={gradient} alt="" height={500} width={500} className=" aspect-[4722/1613] h-auto w-[150%] bottom-0 absolute left-0"  />
      <div className="flex space-x-6">
        {socialLinks.map(([url, name], index) => {
          return (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="flex items-center justify-center z-10"
              >
                {name}
                <Image src={arrow} alt="arrow" />
              </Link>
          );
        })}
      </div>
      <div>Gambhir Sharma © {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;
