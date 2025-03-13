"use client";
import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/globals.scss";
import MainHeader from "./components/ui/layout/Header";
import MainFooter from "./components/ui/layout/Footer";
import { LangBtn } from "./components/ui/buttons";
import MenuOverlay from "./components/ui/overlay/MenuOverlay";

interface LayoutProps {
	children: ReactNode;
}

const Main = styled.main`
	min-height: 100vh;
	background-color: gray;
`;

export default function layout({ children }: LayoutProps) {
	return (
		<html lang="ja">
			<body>
				<ThemeProvider theme={theme}>
					<MenuOverlay />
					<MainHeader />
					<Main>{children}</Main>
					<LangBtn />
					<MainFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
