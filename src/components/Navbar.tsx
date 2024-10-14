import Image from "next/image";
import React, { FC } from "react";
import england from "@/public/assets/images/england.png";

import logo from "@/public/assets/images/logo-icon.png";
import { ArrowDown3 } from "iconsax-react";

const Navbar: FC = () => {
  return (
    <div className="fixed left-0 right-0 h-[86px] flex items-center justify-between px-36 bg-primary-500 z-50 bg-neutral-10">
      <Image
        src={logo}
        alt="logo"
        className="w-28 h-10 cursor-pointer hidden lg:block"
      />
      <div className="hidden lg:flex items-center gap-9 w-fit">
        <div className="relative items-center bg-primary bg-opacity-10 flex p-3 rounded-[14px] gap-4 w-[42px] h-10 cursor-pointer">
          <p
            className={`absolute font-worksans uppercase font-bold text-primary text-base right-5`}
          >
            Home
          </p>
          <div className="absolute bg-white w-[14px] h-[14px] rounded-full flex items-center justify-center z-20 left-9">
            <div className="w-[6px] h-[6px] rounded-full bg-primary" />
          </div>
        </div>
        <div className="cursor-pointer">
          <p
            className={`font-worksans uppercase text-sm font-[500] text-dark-0`}
          >
            Portfolio
          </p>
        </div>
        <div className="cursor-pointer">
          <p
            className={`font-worksans uppercase text-sm font-[500] text-dark-0`}
          >
            Pricing
          </p>
        </div>{" "}
        <div className="cursor-pointer">
          <p
            className={`font-worksans uppercase text-sm font-[500] text-dark-0`}
          >
            FAQ
          </p>
        </div>{" "}
        <div className="cursor-pointer">
          <p
            className={`font-worksans uppercase text-sm font-[500] text-dark-0`}
          >
            Contact
          </p>
        </div>
      </div>
      <div className="hidden lg:flex gap-2 items-center px-2 h-11 rounded-full bg-grey-bg my-auto">
        <Image
          src={england}
          width={40}
          height={40}
          alt="en"
          className="my-auto mt-[6px]"
        />
        <p className="font-[500] self-center text-grey-3C">En</p>
        <ArrowDown3 size={14} color="#3C3C3C" />
      </div>
    </div>
  );
};

export default Navbar;
