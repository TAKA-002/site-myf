"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "@/components/ui/card/Cards.module.scss";
import { aboutUsCard } from "@/constants/aboutUsCard";
import { useLang } from "@/context/LanguageContext";
import HeadingLevel4 from "@/components/ui/heading/HeadingLevel4";
import { Paragraph } from "@/components/ui/text/Paragraph";

export function Card() {
	const { isEnPage } = useLang();

	return (
		<div className={styles.cardWrapper}>
			{aboutUsCard.map((c, index) => {
				const link = isEnPage ? c.enLink : c.link;
				const heading = isEnPage ? c.enHeading : c.heading;
				const alt = isEnPage ? c.enAlt : c.alt;
				const text = isEnPage ? c.enText : c.text;

				return (
					<Link
						href={link}
						key={index}
					>
						<figure className={styles[c.iconCls]}>
							<Image
								src={c.img}
								alt={alt}
								width={640}
								height={360}
							/>
						</figure>
						<div className={styles.cardText}>
							<HeadingLevel4>{heading}</HeadingLevel4>
							<Paragraph>{text}</Paragraph>
						</div>
						<ArrowRight />
					</Link>
				);
			})}
		</div>
	);
}
