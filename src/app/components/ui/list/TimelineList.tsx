import Link from "next/link";
import Image from "next/image";
import HeadingLevel4 from "../heading/HeadingLevel4";
import { Paragraph } from "../text/Paragraph";
import styles from "@/components/ui/list/TimelineList.module.scss";

export default function TimelineList() {
	return (
		<ul className={styles.timeline}>
			<li className={styles["timeline__list"]}>
				<Link
					className={styles["timeline__anchor"]}
					href=""
				>
					<div>
						<h2>代表者メッセージ</h2>
						<p>私はガーナの「PEACE SEED」の代表であり、慈善事業を行う慈善活動家であり、「MONPHY & YOUTH FOUNDATION（非営利団体）」の創設者であり代表です。</p>
						<time dateTime="2025-04-01">2025年04月01日</time>
					</div>
					<figure>
						<Image
							src="/images/about-us/tmb-message.jpg"
							alt=""
							width={640}
							height={360}
						/>
					</figure>
				</Link>
			</li>
		</ul>
	);
}
