import styles from "./MenuBtn.module.scss";
import { useMenu } from "@/context/MenuContext";

export default function MenuButton({ noHeader }: { noHeader?: boolean }) {
	const { isOpen, toggleMenu } = useMenu();

	const cls = () => {
		let clsName = styles.button;
		if (noHeader) clsName += ` ${styles.noheader}`;
		if (isOpen) clsName += ` ${styles.open}`;
		return clsName;
	};

	return (
		<button
			className={cls()}
			onClick={toggleMenu}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
