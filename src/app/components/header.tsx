"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";

const nav = [
  {
    link: "/about-us",
    iconCls: "icon-about-us",
    text: "チームについて",
  },
  {
    link: "/project",
    iconCls: "icon-project",
    text: "プロジェクト",
  },
  {
    link: "/blog",
    iconCls: "icon-blog",
    text: "ブログ",
  },
  {
    link: "/donate",
    iconCls: "icon-donate",
    text: "ご寄付について",
  },
];

export default function MainHeader() {
  return (
    <header>
      <div>
        <h1>
          <Link href="/">
            <Image
              src="/images/common/logo.png"
              alt="ガーナの未来ある子供達に笑顔と教育を！マンフィーと青年基金NGO"
              width={365}
              height={63}
            />
          </Link>
        </h1>

        <MenuBtn />
      </div>

      <Nav navData={nav} />
    </header>
  );
}
