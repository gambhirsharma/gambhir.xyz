import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "@/public/arrow.svg";

const SocialLinks = ({}) => {
  return <Link href=""></Link>;
};

const socialLinks = [
  ["https://www.twitter.com/gambhir_sharma", "Twitter"],
  ["https://www.github.com/gambhirsharma", "GitHub"],
  ["https://www.instagram.com/gambhir__sharma", "Instagram"],
  ["https://www.codepen.io/gambhir_sharma", "CodePen"],
];

function Footer() {
  return (
    <footer className="border-gray-600 border-t flex items-center justify-between py-5 px-4">
      <div className="flex space-x-6">
        {socialLinks.map(([url, name], index) => {
          return (
            <div key={index}>
              <Link href={url} target="_blank" className="flex items-center justify-center">
                {name} 
                <Image src={arrow} alt="arrow"/>
              </Link>
            </div>
          );
        })}
      </div>
      <div>Gambhir Sharma © {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;
