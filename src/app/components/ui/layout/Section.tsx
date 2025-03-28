import { ReactNode } from "react";
import styles from "@/components/ui/layout/Section.module.scss";

interface SectionPropsType {
	children: ReactNode;
	cusCls?: string;
}

export default function Section({ children, cusCls }: SectionPropsType) {
	return <section className={cusCls ? `${styles.section} ${styles[cusCls]}` : styles.section}>{children}</section>;
}
