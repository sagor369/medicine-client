import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-start justify-around bg-cyan-500 py-10 px-4">
      <Link href={"/"} className="">
        <h2 className="text-3xl font-bold font-serif ">
          <span className="text-red-400 text-4xl">S</span>
          adhin
          <span className="text-red-400 text-4xl">M</span>
          edicine
        </h2>
      </Link>
      <div>
        <h2>Sahidul islam </h2>
        <p>Copyright © 2024 sahidul islam</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link href={"https://www.linkedin.com/in/md-sahedul-islam-sagor-90a7b8234"}>
        <Linkedin />
        </Link>
        <Link href={"https://web.facebook.com/sahedul369"}>
        <Facebook />
        </Link>
        <Link href={"https://twitter.com/Sahiduli369?t=4QAQzur6bWXvw3FrImCp0Q&s=08"}>
        <Twitter></Twitter>
        </Link>
        <Link href={"https://github.com/sagor369"}>
        <Github />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
