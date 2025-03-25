"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/ui/card/AboutUsCard.module.scss";
import { aboutUsCard } from "@/constants/aboutUsCard";
import { useLang } from "@/context/LanguageContext";

export default function Card() {
	const { isEnPage } = useLang();

	return (
		<div className={styles.cardWrapper}>
			{aboutUsCard.map((c, index) => {
				const link = isEnPage ? c.enLink : c.link;
				const heading = isEnPage ? c.enHeading : c.heading;
				const text = isEnPage ? c.enText : c.text;
				const alt = isEnPage ? c.enAlt : c.alt;

				return (
					<Link
						href={link}
						key={index}
					>
						<figure>
							<Image
								src={c.img}
								alt={alt}
								width={640}
								height={360}
							/>
						</figure>
						<div className={styles.cardText}>
							<div>
								<h4>{heading}</h4>
								<p>{text}</p>
							</div>
							<p>READ MORE</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
