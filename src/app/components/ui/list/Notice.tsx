"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { noticeList } from "@/constants/notice";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/list/Notice.module.scss";
import { Date } from "@/components/ui/text/Date";

export default function Notice() {
	const { pathname, isEnPage } = useLang();

	return (
		<div className={styles.wrapper}>
			{noticeList.map((n, index) => {
				return (
					<Link
						href={!isEnPage && n.link ? n.link : isEnPage && n.enLink ? n.enLink : ""}
						className={styles.anchor}
						key={index}
						aria-label={isEnPage ? n.enText : n.text}
						{...(n.isBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
					>
						<div className={styles.anchorText}>
							<div>
								<Date time={n.date} />
								{n.tag && <span className={`${styles.tag} ${n.tag ? styles[n.tag.toLowerCase()] : ""}`}>{n.tag}</span>}
							</div>
							<div>
								<span className={styles.text}>{isEnPage ? n.enText : n.text}</span>
							</div>
						</div>
						<ArrowRight />
					</Link>
				);
			})}
		</div>
	);
}
