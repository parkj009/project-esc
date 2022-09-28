// import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed w-full text-white flex bg-black justify-between p-4 items-center">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
