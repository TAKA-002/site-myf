import { ReactNode } from "react";
import styles from "@/components/ui/layout/Wrapper.module.scss";

export function Wrapper({ children }: { children: ReactNode }) {
	return <div className={styles.Wrapper}>{children}</div>;
}
