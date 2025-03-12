import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Link from "next/link";
import { Earth } from "lucide-react";
import LanguageBtnWrapper from "./LanguageBtnWrapper";

const Wrapper = styled.ul`
	position: relative;
	width: 120px;
	height: 30px;

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
	const [isMenuOpen, setIsMenuOpen] = useState(false); // menuボタンがopenか状態管理
	const [isMobileSizeWindow, setIsMobileSizeWindow] = useState(false); // useStateでSPか状態管理

	// // useEffectで、コンポーネントマウント時の処理を記載（デバイス判定実施）
	useEffect(() => {
		console.log("isMobile: ", isMobile);
	}, []);

	// const handleClick = () => {
	// 	!isMobileSizeWindow ? setIsMenuOpen(!isMenuOpen)
	// }

	return (
		<LanguageBtnWrapper>
			<Wrapper>
				<li>
					<a href="#">
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
