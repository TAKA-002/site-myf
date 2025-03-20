import Image from "next/image";
import Link from "next/link";
import { MenuBtn, LangBtn } from "@/components/ui/buttons";
import { useLang } from "@/context/LanguageContext";
import styles from "@/components/ui/layout/Header.module.scss";

const headerLinks = {
	ja: {
		href: "/",
		img: "/images/common/logo.png",
		alt: "ガーナの未来ある子供達に笑顔と教育を！マンフィーと青年基金NGO",
	},
	en: {
		href: "/en",
		img: "/images/common/logo_en.png",
		alt: "Monphy and Youth Foundation NGO",
	},
};

export default function MainHeader() {
	const { isEnPage } = useLang();

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<Link className={styles.link} href={isEnPage ? headerLinks.en.href : headerLinks.ja.href}>
					<Image src={isEnPage ? headerLinks.en.img : headerLinks.ja.img} alt={isEnPage ? headerLinks.en.alt : headerLinks.ja.alt} width={365} height={63} />
				</Link>

				<div className={styles.btnWrapper}>
					<LangBtn />
					<MenuBtn />
				</div>
			</div>
		</header>
	);
}
