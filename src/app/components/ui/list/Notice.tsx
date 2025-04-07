"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { noticeList } from "@/constants/notice";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/list/Notice.module.scss";
import { Time } from "@/components/ui/text/Date";

export default function Notice() {
	const { isEnPage } = useLang();

	return (
		<div className={styles.wrapper}>
			{noticeList.map((n, index) => {
				const link = isEnPage ? n.enLink : n.link;
				const text = isEnPage ? n.enText : n.text;
				const hasLink = Boolean(link);

				return (
					<Link
						href={link || ""}
						className={`${styles.anchor} ${!hasLink ? styles.anchorEventNone : ""}`}
						key={index}
						aria-label={text}
						{...(n.isBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
					>
						<div className={styles.anchorText}>
							<div>
								<Time time={n.date} />
								{n.tag && <span className={`${styles.tag} ${n.tag ? styles[n.tag.toLowerCase()] : ""}`}>{n.tag}</span>}
							</div>
							<div>
								<span className={styles.text}>{text}</span>
							</div>
						</div>

						{hasLink && <FaArrowRightLong />}
					</Link>
				);
			})}
		</div>
	);
}
