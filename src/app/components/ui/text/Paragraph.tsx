import { ReactNode } from "react";
import styles from "@/components/ui/text/Paragraph.module.scss";

interface ParagraphProps {
	children: ReactNode;
	align?: "left" | "center" | "right";
	maxWidth?: string;
	marginInline?: "auto" | "initial";
	needMargin?: boolean;
}

export function Paragraph({ children, align, maxWidth, marginInline, needMargin }: ParagraphProps) {
	return (
		<p
			className={styles.paragraph}
			style={{ maxWidth: maxWidth, textAlign: align, marginInline: marginInline, ...(needMargin && { padding: "0 12px" }) }}
		>
			{children}
		</p>
	);
}
