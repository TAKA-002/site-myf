import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Earth } from "lucide-react";
import { useLang } from "../../../context/LanguageContext";
import LanguageBtnWrapper from "./LanguageBtnWrapper";
import styles from "./LanguageBtn.module.scss";

export default function LanguageButton() {
	const { jaPagePathname, enPagePathname } = useLang();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		// タッチデバイスかどうかで処理を分岐するためチェック
		const checkTouch = () => setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
		checkTouch();
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsMenuOpen((prev) => !prev);
	};

	const handleTouch = (e: React.TouchEvent<HTMLElement>) => {
		e.preventDefault();
		setIsMenuOpen((prev) => !prev);
	};

	// 適切なイベントを判断
	const appropriateEvents = isTouchDevice ? { onTouchStart: handleTouch } : { onClick: handleClick };

	return (
		<LanguageBtnWrapper>
			<ul className={isMenuOpen ? `${styles.ul} open` : styles.ul}>
				<li {...appropriateEvents}>
					<a>
						Language
						<Earth />
					</a>
				</li>
				<li>
					<Link href={jaPagePathname}>Japanese</Link>
				</li>
				<li>
					<Link href={enPagePathname}>English</Link>
				</li>
			</ul>
		</LanguageBtnWrapper>
	);
}
