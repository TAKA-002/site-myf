import styles from "./SectionHeadingLevel2nd.module.scss";

export default function SectionHeadingLevel2nd({ text }: { text: string }) {
	return <h2 className={styles.heading2}>{text}</h2>;
}
