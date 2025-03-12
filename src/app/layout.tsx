"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/globals.scss";
import MainHeader from "./components/ui/layout/Header";
import MainFooter from "./components/ui/layout/Footer";
import { LangBtn } from "./components/ui/buttons";

interface LayoutProps {
	children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
	return (
		<html lang="ja">
			<body>
				<ThemeProvider theme={theme}>
					<MainHeader />
					<main>{children}</main>
					<LangBtn />
					<MainFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
