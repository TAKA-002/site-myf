import { ReactNode } from "react";
import styles from "@/components/ui/text/Paragraph.module.scss";

interface ParagraphProps {
	children: ReactNode;
	align?: "left" | "center" | "right";
	maxWidth?: string;
	marginInline?: "auto" | "initial";
}

export function Paragraph({ children, align, maxWidth, marginInline }: ParagraphProps) {
	return (
		<p
			className={styles.paragraph}
			style={{ maxWidth: maxWidth, textAlign: align, marginInline: marginInline }}
		>
			{children}
		</p>
	);
}
