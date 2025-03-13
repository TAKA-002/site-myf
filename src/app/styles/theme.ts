export interface Theme {
  colors: {
    bgMenuBtn: string;
    bgLangBtn: string;
    txtLangBtn: string;
    bgHeader: string,
    overlay: string,
  },
  breakpoint: {
    LangBtn: string;
  }


}

export const theme: Theme = {
  colors: {
    bgMenuBtn: "#fff",
    bgLangBtn: "#000",
    txtLangBtn: "#fff",
    bgHeader: "#288f4d",
    overlay: "#f5f5f5",
  },
  breakpoint: {
    LangBtn: "590px",
  }
};
