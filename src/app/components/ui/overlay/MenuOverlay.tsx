import styles from "./MenuOverlay.module.scss";
import { ReactNode } from "react";
import { useMenu } from "../../../context/MenuContext";

export default function MenuOverlay({ children }: { children: ReactNode }) {
	const { isOpen, closeMenu } = useMenu();

	return (
		<div className={isOpen ? `${styles.div} ${styles.open}` : styles.div} onClick={closeMenu}>
			{children}
		</div>
	);
}
