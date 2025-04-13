"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/ui/list/TimelineList.module.scss";
import { Time } from "@/components/ui/text/Date";

const data = [
	{
		h2: "代表者メッセージ",
		paragraph: "私はガーナの「PEACE SEED」の代表であり、慈善事業を行う慈善活動家であり、「MONPHY & YOUTH FOUNDATION（非営利団体）」の創設者であり代表です。",
		date: 20250401,
		img: "/images/dmy.png",
	},
	{
		h2: "なぜ活動をするのか。目標。",
		paragraph:
			"私は、自分のコミュニティの多くの人々に食事を提供し、支援してきたことで、その活動が認められてきました。学校の建設、学費の支払い、貧しい人々への経済的支援、病院代の支払い、いくつかの医療センターへの救急車の提供、人々への雇用の提供、さらには様々なコミュニティでの井戸掘りなどのプロジェクトへの資金提供など、彼らのニーズに応えてきました。",
		date: 20250401,
		img: "/images/dmy.png",
	},
];

export default function TimelineList() {
	return (
		<ul className={styles.timeline}>
			{data.map((d, index) => {
				return (
					<li
						className={styles["timeline__list"]}
						key={index}
					>
						<Link
							className={styles["timeline__anchor"]}
							href=""
						>
							<div>
								<h2>
									<span>{d.h2}</span>
								</h2>
								{d.paragraph && <p>{d.paragraph}</p>}
								{d.date && <Time time={d.date} />}
							</div>
							<figure>
								<Image
									src={d.img}
									alt=""
									width={640}
									height={360}
								/>
							</figure>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
