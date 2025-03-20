import { ReactNode } from "react";
import styles from "@/components/ui/buttons/LanguageBtnWrapper.module.scss";

interface LangBtnWrapperProps {
	children: ReactNode;
}

export default function LanguageBtnWrapper({ children }: LangBtnWrapperProps) {
	return <div className={styles.div}>{children}</div>;
}
