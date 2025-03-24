import dayjs from "dayjs";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/text/Date.module.scss";

export function Date({ time }: { time: number }) {
	const { isEnPage } = useLang();

	const formatFromYYYYMMDD = (time: number): string => {
		const dateStr = String(time);
		const year = dateStr.substring(0, 4);
		const month = dateStr.substring(4, 6);
		const day = dateStr.substring(6, 8);

		if (isEnPage) return dayjs(`${year}-${month}-${day}`).format("YYYY.MM.DD");
		else return dayjs(`${year}-${month}-${day}`).format("YYYY年MM月DD日");
	};

	return <time className={styles.date}>{formatFromYYYYMMDD(time)}</time>;
}
