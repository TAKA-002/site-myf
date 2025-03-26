import { ReactNode } from "react";
import styles from "@/components/ui/heading/HeadingLevel4.module.scss";

export default function HeadingLevel4({ children }: { children: ReactNode }) {
	return <h4 className={styles.h4}>{children}</h4>;
}
