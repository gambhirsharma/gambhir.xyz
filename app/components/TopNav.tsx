import Link from "next/link";
import React from "react";

function TopNav() {
  return (
    <nav className="flex justify-between items-center select-none">
      <div>
        <ul className="flex items-center text-3sm text-gray-300 space-x-7">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
      <div className="text-2xl ">gambhir.xyz</div>
      <div>
        <div>
          Say Hi -{" "}
          <Link
            className="bg-gradient-to-r from-[#EA3B2A] via-[#D64186] to-[#C34CFB] text-transparent bg-clip-text"
            href="https://www.twitter.com/gambhir_sharma"
            target="_blank"
          >
            @gambhir_sharma
          </Link>{" "}
          👋
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
