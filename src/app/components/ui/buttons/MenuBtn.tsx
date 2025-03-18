import styles from "./MenuBtn.module.scss";
import { useMenu } from "../../../context/MenuContext";

export default function MenuButton() {
	const { isOpen, toggleMenu } = useMenu();

	return (
		<button className={isOpen ? `${styles.button} ${styles.open}` : styles.button} onClick={toggleMenu}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
