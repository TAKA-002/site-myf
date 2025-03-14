interface NavData {
  link: string,
  iconCls: string,
  text: string,
  img: string
}

export const nav: NavData[] = [
  {
    link: "/",
    iconCls: "",
    text: "ホーム",
    img: ""
  },
  {
    link: "/about-us",
    iconCls: "icon-about-us",
    text: "チームについて",
    img: "mv_aboutus.jpg"
  },
  {
    link: "/project",
    iconCls: "icon-project",
    text: "プロジェクト",
    img: "mv_project.jpg"
  },
  {
    link: "/blog",
    iconCls: "icon-blog",
    text: "ブログ",
    img: "mv_blog.jpg"
  },
  {
    link: "/donate",
    iconCls: "icon-donate",
    text: "ご寄付について",
    img: "mv_donate.jpg"
  },
];
