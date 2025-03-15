"use client";
import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { MenuProvider } from "./context/MenuContext";
import { LanguageProvider } from "./context/LanguageContext";
import { theme } from "./styles/theme";
import "./styles/globals.scss";
import MenuOverlay from "./components/ui/overlay/MenuOverlay";
import NavList from "./components/ui/navigation/NavList";
import MainHeader from "./components/ui/layout/Header";
import MainFooter from "./components/ui/layout/Footer";
import { LangBtn } from "./components/ui/buttons";

interface LayoutProps {
	children: ReactNode;
}

const Main = styled.main`
	min-height: 100vh;
`;

export default function layout({ children }: LayoutProps) {
	return (
		<html lang="ja">
			<body>
				<LanguageProvider>
					<MenuProvider>
						<ThemeProvider theme={theme}>
							<MenuOverlay>
								<NavList />
							</MenuOverlay>
							<MainHeader />
							<Main>{children}</Main>
							<LangBtn />
							<MainFooter />
						</ThemeProvider>
					</MenuProvider>
				</LanguageProvider>
			</body>
		</html>
	);
}
