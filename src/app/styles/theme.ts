export interface Theme {
  colors: {
    bgMenuBtn: string;
    bgLangBtn: string;
    txtLangBtn: string;
    bgHeader: string,
    overlay: string,
    txtNav: string,
  },
  breakpoint: {
    LangBtn: string;
    MvSlider: string,
  }


}

export const theme: Theme = {
  colors: {
    bgMenuBtn: "#fff",
    bgLangBtn: "#000",
    txtLangBtn: "#fff",
    bgHeader: "#288f4d",
    overlay: "#000",
    txtNav: "#fff",
  },
  breakpoint: {
    LangBtn: "590px",
    MvSlider: "768px",
  }
};
