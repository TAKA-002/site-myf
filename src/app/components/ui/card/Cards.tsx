"use client";
import Link from "next/link";
import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";
import styles from "@/components/ui/card/Cards.module.scss";
import { useLang } from "@/context/LanguageContext";
import HeadingLevel4 from "@/components/ui/heading/HeadingLevel4";
import { Paragraph } from "@/components/ui/text/Paragraph";

interface dataProps {
	link: string;
	enLink: string;
	heading: string;
	enHeading: string;
	text: string;
	enText: string;
	img: string;
	alt: string;
	enAlt: string;
	iconCls: string;
}

export function Card({ data }: { data: dataProps[] }) {
	const { isEnPage } = useLang();

	return (
		<div className={styles.cardWrapper}>
			{data.map((d, index) => {
				const link = isEnPage ? d.enLink : d.link;
				const heading = isEnPage ? d.enHeading : d.heading;
				const alt = isEnPage ? d.enAlt : d.alt;
				const text = isEnPage ? d.enText : d.text;

				return (
					<Link
						href={link}
						key={index}
					>
						<figure className={styles[d.iconCls]}>
							<Image
								src={d.img}
								alt={alt}
								width={640}
								height={360}
							/>
						</figure>
						<div className={styles.cardText}>
							<HeadingLevel4>{heading}</HeadingLevel4>
							<Paragraph>{text}</Paragraph>
						</div>
						<FaAnglesRight />
					</Link>
				);
			})}
		</div>
	);
}
