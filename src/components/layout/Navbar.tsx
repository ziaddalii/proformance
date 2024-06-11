import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/proformance-logo.png";
import Link from "next/link";
function Navbar() {
  return (
    <header className="py-4 px-4 md-px-0 h-20 w-full fixed z-[100] top-0 border-b border-1 border-slate-600 bg-[#00000033] backdrop-blur-sm">
      <div className="max-w-4xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="h-full w-fit">
          <Image
            className="h-full w-fit object-contain"
            src={Logo}
            alt="proformance logo"
          />
        </Link>
        <div className="flex items-center justify-between md:gap-8 gap-4">
          <Link href={"/#features"}>
            Features
          </Link>
          <Link href={"/#about-us"}>
            About us
          </Link>
          <Link href={"/#why-we"}>
            Why we
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
