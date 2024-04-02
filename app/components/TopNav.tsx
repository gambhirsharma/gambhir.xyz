import React from "react";

function TopNav() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <ul className="flex items-center text-3sm text-gray-300 space-x-7">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
      <div className="text-2xl ">gambhir.xyz</div>
      <div>Say Hi - gambhir.sharma@gmail.com 👋</div>
    </nav>
  );
}

export default TopNav;
