import { NavLink } from "react-router-dom";

function Footer() {
  const navigation = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Licensing", link: "/licensing" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Project ESC. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        {navigation.map((item) => (
          <NavLink to={item.link} key={item.name}>
            <li className="mr-4 hover:underline md:mr-6">{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
