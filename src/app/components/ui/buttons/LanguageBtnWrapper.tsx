import { ReactNode } from "react";
import styles from "./LanguageBtnWrapper.module.scss";

interface LangBtnWrapperProps {
	children: ReactNode;
}

export default function LanguageBtnWrapper({ children }: LangBtnWrapperProps) {
	return <div className={styles.div}>{children}</div>;
}
