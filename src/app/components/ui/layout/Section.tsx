import { ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionPropsType {
	children: ReactNode;
	name?: string;
}

export default function Section({ children, name }: SectionPropsType) {
	return <section className={name ? `${styles.section} ${styles[name]}` : styles.section}>{children}</section>;
}
