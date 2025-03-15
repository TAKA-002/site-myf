interface NavData {
  link: string,
  enLink: string,
  iconCls: string,
  text: string,
  enText: string,
  img: string
}

export const nav: NavData[] = [
  {
    link: "/",
    enLink: "/en",
    iconCls: "",
    text: "ホーム",
    enText: "Home",
    img: ""
  },
  {
    link: "/about-us",
    enLink: "/about-us/en",
    iconCls: "icon-about-us",
    text: "チームについて",
    enText: "About Us",
    img: "mv_aboutus.jpg"
  },
  {
    link: "/project",
    enLink: "/project/en",
    iconCls: "icon-project",
    text: "プロジェクト",
    enText: "Project",
    img: "mv_project.jpg"
  },
  {
    link: "/blog",
    enLink: "/blog/en",
    iconCls: "icon-blog",
    text: "ブログ",
    enText: "Blog",
    img: "mv_blog.jpg"
  },
  {
    link: "/donate",
    enLink: "/donate/en",
    iconCls: "icon-donate",
    text: "ご寄付について",
    enText: "Donate",
    img: "mv_donate.jpg"
  },
];
