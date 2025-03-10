import React from "react";
import MainHeader from "./components/header";
import MainFooter from "./components/footer";

interface LayoutProps {
  children: React.ReactNode;
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
