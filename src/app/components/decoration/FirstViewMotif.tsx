import Image from "next/image";
import styles from "@/components/decoration/FirstViewMotif.module.scss";

export default function FirstViewMotif() {
	return (
		<div className={styles.imageWrapper}>
			<Image
				src="/images/top/first-view.png"
				alt=""
				width={400}
				height={400}
			/>
		</div>
	);
}
