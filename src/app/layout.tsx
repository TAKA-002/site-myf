"use client";
import { ReactNode } from "react";
import { MenuProvider } from "@/context/MenuContext";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.scss";
import MenuOverlay from "@/components/ui/overlay/MenuOverlay";
import NavList from "@/components/ui/navigation/NavList";
import MainHeader from "@/components/ui/layout/Header";
import MainFooter from "@/components/ui/layout/Footer";
import { LangBtn, MenuBtn } from "@/components/ui/buttons";

interface LayoutProps {
	children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
	return (
		<html lang="ja">
			<body>
				<LanguageProvider>
					<MenuProvider>
						<MenuOverlay>
							<NavList />
						</MenuOverlay>
						<MainHeader />
						<main style={{ minHeight: "100vh" }}>{children}</main>
						<LangBtn />
						<MenuBtn noHeader />
						<MainFooter />
					</MenuProvider>
				</LanguageProvider>
			</body>
		</html>
	);
}
