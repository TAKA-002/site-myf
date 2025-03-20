import Link from "next/link";
import { nav } from "@/constants/navigations";
import { useMenu } from "@/context/MenuContext";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/navigation/NavList.module.scss";

export default function NavList() {
	const { isOpen } = useMenu();
	const { pathname, isEnPage } = useLang();

	return (
		<nav>
			<ul className={isOpen ? `${styles.ul} ${styles.open}` : styles.ul}>
				{nav.map((n, index) => {
					return (
						<li key={index}>
							<Link href={isEnPage ? n.enLink : n.link} className={styles[n.iconCls]}>
								{isEnPage ? n.enText : n.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
