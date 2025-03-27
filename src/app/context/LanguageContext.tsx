"use client";

import { usePathname } from "next/navigation";
import React, { useState, useContext, createContext, ReactNode, useEffect } from "react";

type LanguageContextType = {
	pathname: string;
	isEnPage: boolean;
	jaPagePathname: string;
	enPagePathname: string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const [isEnPage, setIsEngPaeg] = useState(false);
	const [jaPagePathname, setjaPagePathname] = useState("");
	const [enPagePathname, setEnPagePathname] = useState("");

	useEffect(() => {
		const isTopJpPage = pathname === "/";
		const isTopEnPage = pathname === "/en";
		const hasEngword = pathname.split("/").includes("en");

		const paths = {
			jaPagePathname: (function (pathname) {
				if (isTopJpPage || isTopEnPage) return "/";
				else if (isEnPage) return pathname.replace("/en", "");
				else return pathname;
			})(pathname),

			enPagePathname: (function (pathname) {
				if (isTopJpPage || isTopEnPage) return "/en";
				else if (isEnPage) return pathname;
				else return `${pathname}/en`;
			})(pathname),
		};

		setIsEngPaeg(hasEngword);
		setjaPagePathname(paths.jaPagePathname);
		setEnPagePathname(paths.enPagePathname);
	}, [pathname, isEnPage]);

	return <LanguageContext.Provider value={{ pathname, isEnPage, jaPagePathname, enPagePathname }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLang must be used within a LanguageContext");
	}
	return context;
}
