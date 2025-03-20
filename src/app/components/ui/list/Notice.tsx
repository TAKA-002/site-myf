"use client";
import Link from "next/link";
import { noticeList } from "@/constants/notice";
import { useLang } from "@/context/LanguageContext";

export default function Notice() {
	const { pathname, isEnPage } = useLang();
	const href = () => {};

	return (
		<div className="">
			{noticeList.map((n, index) => {
				return (
					<Link href={!isEnPage && n.link ? n.link : isEnPage && n.enLink ? n.enLink : ""} className="" key={index}>
						<span>{n.date}</span>
						<span>{isEnPage ? n.enText : n.text}</span>
					</Link>
				);
			})}
		</div>
	);
}
