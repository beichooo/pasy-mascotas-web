import Image from "next/image";
import React from "react";
import donateButtonIcon from "../../public/navbar-button-heart.svg";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-[32px] font-fredoka font-semibold text-pasy-brown-text">
            PASY
          </h1>
        </Link>
      </div>
      <button className="flex flex-row px-2 py-[6px] rounded-lg text-[16px] gap-2 font-fredoka font-medium border-2 border-pasy-brown-text bg-pasy-brown-bg-second text-pasy-brown-text items-center">
        Donar
        <Image src={donateButtonIcon} alt="green icon" />
      </button>
    </header>
  );
};

export default Header;
