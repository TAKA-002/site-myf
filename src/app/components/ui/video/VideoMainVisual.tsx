import styles from "@/components/ui/video/VideoMainVisual.module.scss";

export default function VideoMainVisual({ category }: { category: string }) {
	const srcFile = () => {
		const categoryStrings = category.split(" ");
		if (categoryStrings.length !== 1) {
			return categoryStrings.map((c) => c.toLowerCase()).join("-");
		} else return category.toLowerCase();
	};

	return (
		<div className={styles["video-header"]}>
			<div className={styles["video-container"]}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				>
					<source
						src={`/videos/${srcFile()}.mp4`}
						type="video/mp4"
					/>
				</video>
				<div className={styles["video-overlay"]}>
					<span>{category}</span>
				</div>
			</div>
		</div>
	);
}
