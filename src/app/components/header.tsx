import React from "react";

const nav = [
  {
    link: "about-us",
    iconCls: "icon-about-us",
    text: "チームについて",
  },
  {
    link: "project",
    iconCls: "icon-project",
    text: "プロジェクト",
  },
  {
    link: "blog",
    iconCls: "icon-blog",
    text: "ブログ",
  },
  {
    link: "donate",
    iconCls: "icon-donate",
    text: "ご寄付について",
  },
];

export default function MainHeader() {
  return (
    <div className="l-header">
      <div className="l-header__wrap">
        <h1 className="l-header__title">
          <a href="/site-MYF/" className="l-header__link">
            <img
              className="l-header__logo"
              src="/site-MYF/images/common/logo.png"
              alt=""
            />
          </a>
        </h1>

        <div id="menu" className="menu">
          <ul className="l-navi">
            {nav.map((n) => {
              return (
                <li className="l-navi__item">
                  <a href={n.link} className={`l-navi__link ${n.iconCls}`}>
                    {n.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="menu__btn" className="menu__btn">
          MENU
        </div>

        <div className="menu__background"></div>
      </div>

      <div className="l-navi__wrap">
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
      </div>
    </div>
  );
}
