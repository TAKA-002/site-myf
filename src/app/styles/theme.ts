export interface Theme {
  colors: {
    bgMenuBtn: string;
    bgLangBtn: string;
    txtLangBtn: string;
    bgHeader: string,
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
  },
  breakpoint: {
    LangBtn: "580px",
  }
};
