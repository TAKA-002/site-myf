import dayjs from "dayjs";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/text/Date.module.scss";

interface FormatDatetime {
	fmtDottDatetime: string;
	fmtHyphenDatetime: string;
}

export function Time({ time }: { time: number }) {
	const { isEnPage } = useLang();

	const formatFromYYYYMMDD = (time: number): FormatDatetime => {
		const dateStr = String(time);
		const year = dateStr.substring(0, 4);
		const month = dateStr.substring(4, 6);
		const day = dateStr.substring(6, 8);
		const hyphenDatetime = `${year}-${month}-${day}`;

		if (isEnPage) return { fmtDottDatetime: dayjs(`${year}-${month}-${day}`).format("YYYY.MM.DD"), fmtHyphenDatetime: hyphenDatetime };
		else return { fmtDottDatetime: dayjs(`${year}-${month}-${day}`).format("YYYY年MM月DD日"), fmtHyphenDatetime: hyphenDatetime };
	};

	return (
		<time
			className={styles.date}
			dateTime={formatFromYYYYMMDD(time).fmtHyphenDatetime}
		>
			{formatFromYYYYMMDD(time).fmtDottDatetime}
		</time>
	);
}
