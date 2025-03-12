"use client";
import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/globals.scss";
import MainHeader from "./components/ui/layout/Header";
import MainFooter from "./components/ui/layout/Footer";
import { LangBtn } from "./components/ui/buttons";

interface LayoutProps {
	children: ReactNode;
}

/* 579pxまで表示。580pxから非表示。 */
const LangBtnWrapper = styled.div`
	position: absolute;
	z-index: 20;
	bottom: 120px;
	right: 0;
	display: block;

	@media screen and (min-width: ${(props) => props.theme.breakpoint.LangBtn}) {
		display: none;
	}
`;

export default function layout({ children }: LayoutProps) {
	return (
		<html lang="ja">
			<body>
				<ThemeProvider theme={theme}>
					<MainHeader />
					<main>{children}</main>
					<LangBtnWrapper>
						<LangBtn />
					</LangBtnWrapper>
					<MainFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
