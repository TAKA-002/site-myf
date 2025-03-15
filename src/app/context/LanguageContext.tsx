"use client";

import { usePathname } from "next/navigation";
import React, { useState, useContext, createContext, ReactNode, useEffect } from "react";

type LanguageContextType = {
	isEngPage: boolean;
	jpPagePathname: string;
	enPagePathname: string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const [isEngPage, setIsEngPaeg] = useState(false);
	const [jpPagePathname, setJpPagePathname] = useState("");
	const [enPagePathname, setEnPagePathname] = useState("");

	useEffect(() => {
		const isTopJpPage = pathname === "/";
		const isTopEnPage = pathname === "/en";
		const hasEngword = pathname.split("/").includes("en");

		const paths = {
			jpPagePathname: (function (pathname) {
				if (isTopJpPage || isTopEnPage) return "/";
				else if (isEngPage) return pathname.replace("/en", "");
				else return pathname;
			})(pathname),

			enPagePathname: (function (pathname) {
				if (isTopJpPage || isTopEnPage) return "/en";
				else if (isEngPage) return pathname;
				else return `${pathname}/en`;
			})(pathname),
		};

		setIsEngPaeg(hasEngword);
		setJpPagePathname(paths.jpPagePathname);
		setEnPagePathname(paths.enPagePathname);
	}, [pathname]);

	return <LanguageContext.Provider value={{ isEngPage, jpPagePathname, enPagePathname }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLang must be used within a LanguageContext");
	}
	return context;
}
