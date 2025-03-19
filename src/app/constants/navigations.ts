interface NavData {
  link: string,
  enLink: string,
  iconCls: string,
  text: string,
  enText: string,
  img: string,
  enImg: string
}

export const nav: NavData[] = [
  {
    link: "/",
    enLink: "/en",
    iconCls: "",
    text: "ホーム",
    enText: "Home",
    img: "",
    enImg: ""
  },
  {
    link: "/about-us",
    enLink: "/about-us/en",
    iconCls: "icon-about-us",
    text: "チームについて",
    enText: "About Us",
    img: "mv_aboutus.jpg",
    enImg: "mv_aboutus_en.jpg"
  },
  {
    link: "/project",
    enLink: "/project/en",
    iconCls: "icon-project",
    text: "プロジェクト",
    enText: "Project",
    img: "mv_project.jpg",
    enImg: "mv_project_en.jpg"
  },
  {
    link: "/archive",
    enLink: "/archive/en",
    iconCls: "icon-archive",
    text: "アーカイブ",
    enText: "Archive",
    img: "mv_archive.jpg",
    enImg: "mv_archive_en.jpg"
  },
  {
    link: "/donate",
    enLink: "/donate/en",
    iconCls: "icon-donate",
    text: "ご寄付について",
    enText: "Donate",
    img: "mv_donate.jpg",
    enImg: "mv_donate_en.jpg"
  },
];
