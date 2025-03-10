"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <header>
      <div>
        <h1>
          <Link href="/">
            <Image
              src="/images/common/logo.png"
              alt=""
              width={365}
              height={63}
            />
          </Link>
        </h1>

        <nav>
          <ul>
            {nav.map((n) => {
              return (
                <li>
                  <Link
                    href={n.link}
                    className={
                      pathname === n.link ? `active ${n.iconCls}` : n.iconCls
                    }
                  >
                    {n.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <div id="menu__btn" className="menu__btn">
          MENU
        </div>

        <div className="menu__background"></div> */}
      </div>

      {/* <div className="l-navi__wrap">
        <ul id="ch-Lang" className="l-navi--chengeLang">
          <li className="l-navi--chengeLang__list">
            <a className="l-navi--chengeLang__list-header disabled" href="#">
              Language
            </a>
            <ul className="l-navi--chengeLang__list-item__wrap">
              <li>
                <a href="./">Japanese</a>
              </li>
              <li>
                <a href="./en/">English</a>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </header>
  );
}
