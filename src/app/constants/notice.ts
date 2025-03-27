interface NoticeListData {
  date: number;
  text: string;
  enText: string;
  tag?: string;
  link?: string;
  enLink?: string;
  isBlank: boolean;
}

export const noticeList: NoticeListData[] = [
  {
    date: 20220413,
    tag: "Archive",
    text: "寄贈品ありがとうございます。",
    enText: "Thank you for the donation of clothes.",
    link: "/blog/article/2022/0413",
    enLink: "/blog/article/2022/0413/en",
    isBlank: false
  },
  {
    date: 20220328,
    tag: "Archive",
    text: "バスケットボール約400個が寄贈されました。",
    enText: "400 basketballs ware Donated.",
    link: "/blog/article/2022/0328",
    enLink: "/blog/article/2022/0328/en",
    isBlank: false
  },
  {
    date: 20220307,
    tag: undefined,
    text: "独立記念日!",
    enText: "Independence Day.",
    link: undefined,
    enLink: undefined,
    isBlank: false
  },
  {
    date: 20220305,
    tag: "Facebook",
    text: "私たちの学校のエンターテイメントデイです!",
    enText: "Celebration day in our School!!",
    link: "https://www.facebook.com/watch/?v=2317843488514649&ref=sharing",
    enLink: "https://www.facebook.com/watch/?v=2317843488514649&ref=sharing",
    isBlank: true
  },
  {
    date: 20220123,
    tag: "Facebook",
    text: "私は日本に戻ってきました!!",
    enText: "I\'m back in Japan!!'",
    link: "https://www.facebook.com/watch/?v=1098425564280927&ref=sharing",
    enLink: "https://www.facebook.com/watch/?v=1098425564280927&ref=sharing",
    isBlank: true
  },
  {
    date: 20210828,
    tag: "Facebook",
    text: "ガーナからの「Facebook Live動画」です。",
    enText: "Facebook Live from Ghana.",
    link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=1721405228248388",
    enLink: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=1721405228248388",
    isBlank: true
  }
];
