import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Earth } from "lucide-react";
import LanguageBtnWrapper from "./LanguageBtnWrapper";

const Wrapper = styled.ul`
	position: relative;
	width: 120px;
	height: 30px;

	&:hover {
		cursor: pointer;
	}

	& li {
		position: relative;
		width: 100%;
		height: 100%;
		font-size: 12px;
		font-weight: bold;
		color: ${(props) => props.theme.colors.txtLangBtn};
		background-color: ${(props) => props.theme.colors.bgLangBtn};
		border-radius: 6px;
		transition: transform 0.3s;

		&:nth-child(1) {
			z-index: 2;

			& a {
				display: flex;
				justify-content: space-between;
				align-items: center;
				pointer-events: none;
			}
		}

		&:not(:first-child) {
			& a {
				z-index: 1;
				padding: 0 0 0 20px;
			}
		}

		&:nth-child(2) {
			transform: translateY(-30px);
		}

		&:nth-child(3) {
			transform: translateY(-60px);
		}

		& a {
			height: 100%;
			display: grid;
			align-items: center;
			padding: 0 8px;
		}
	}

	/* アコーディオンオープン */
	&.open {
		& li:nth-child(1) {
			border-radius: 6px 6px 0 0;
		}
		& li:nth-child(2) {
			border-radius: 0;
			transform: none;
		}
		& li:nth-child(3) {
			border-radius: 0 0 6px 6px;
			transform: none;
		}
	}
`;

export default function LanguageButton() {
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
			<Wrapper className={isMenuOpen ? "open" : ""}>
				<li {...appropriateEvents}>
					<a>
						Language
						<Earth />
					</a>
				</li>
				<li>
					<Link href="">Japanese</Link>
				</li>
				<li>
					<Link href="./en/">English</Link>
				</li>
			</Wrapper>
		</LanguageBtnWrapper>
	);
}
