"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/globals.scss";
import MainHeader from "./components/Header";
import MainFooter from "./components/Footer";

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
					<MainFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
