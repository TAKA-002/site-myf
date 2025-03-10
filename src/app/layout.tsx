import { ReactNode } from "react";
import "./styles/globals.scss";
import MainHeader from "./components/header";
import MainFooter from "./components/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <body>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
