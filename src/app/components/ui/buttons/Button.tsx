"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/buttons/Button.module.scss";

export function MoreBtn({ href }: { href: string }) {
	const { isEnPage } = useLang();
	return (
		<Link
			className={styles.moreBtn}
			href={href}
		>
			<Image
				src={isEnPage ? "/images/top/btn-more_en.jpg" : "/images/top/btn-more.png"}
				width={384}
				height={87}
				alt="More Button"
			/>
		</Link>
	);
}
