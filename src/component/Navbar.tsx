
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import PrimaryButton from "./PrimaryButton";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DynamicConnectButton } from "@dynamic-labs/sdk-react-core";
import Logo from "../assets/logo.svg"

type NavType = {
  path: string;
  name: string;
};

const navLinks: NavType[] = [
  {
    path: "/personal",
    name: "Personal",
  },
  {
    path: "/business",
    name: "Business",
  },
  {
    path: "/developer",
    name: "Developer",
  },
  {
    path: "/learn",
    name: "Learn",
  },
  {
    path: "/support",
    name: "Support",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggleMenu = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="py-5 lg:py-8 flex justify-between items-center relative">
      <div className="flex gap-6 items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-40 md:w-fit" />
        </Link>
        <div className="lg:mt-3 font-semibold text-sm lg:text-lg hidden lg:flex gap-5">
          {navLinks.map((item) => {
            return (
              <Link
                className="hover:text-primaryColor"
                key={item.path}
                to={item.path}
              >
                {item.name} <BiChevronDown className="inline" size={20} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:flex gap-5 items-center">
        <DynamicConnectButton buttonClassName="mx-auto flex">
          <span className="text-center mx-auto">Sign in</span>
        </DynamicConnectButton>
        <DynamicConnectButton buttonClassName="mx-auto flex">
          <PrimaryButton>
            <p>
              Start now <FaChevronRight className="inline" />
            </p>
          </PrimaryButton>
        </DynamicConnectButton>
      </div>
      <div className="cursor-pointer lg:hidden">
        {navbar ? (
          <MdClose onClick={toggleMenu} size={30} />
        ) : (
          <RxHamburgerMenu onClick={toggleMenu} size={30} />
        )}
      </div>
      <div
        className={`lg:hidden text-xs md:text-base bg-neutral-950 text-white transition-all ease-in-out origin-top-right px-10 py-6 rounded-md absolute z-50 right-0 top-16 flex flex-col gap-5 ${
          navbar
            ? "opacity-100 scale-x-100 translate-x-0"
            : "opacity-0 scale-x-0 translate-x-40"
        } duration-500`}
      >
        <div className="flex flex-col justify-center items-center gap-5">
          {navLinks.map((item) => (
            <Link
              onClick={toggleMenu}
              key={item.path}
              to={item.path}
              className="hover:text-emerald-300"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <DynamicConnectButton buttonClassName="mx-auto flex">
          <span className="text-center mx-auto">Sign in</span>
        </DynamicConnectButton>
        <DynamicConnectButton buttonClassName="mx-auto flex">
          <PrimaryButton>
            <p>
              Start now <FaChevronRight className="inline" />
            </p>
          </PrimaryButton>
        </DynamicConnectButton>
      </div>
    </nav>
  );
}
