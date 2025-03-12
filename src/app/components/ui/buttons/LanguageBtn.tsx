import styled from "styled-components";
import Link from "next/link";
import { Earth } from "lucide-react";

const Wrapper = styled.ul`
	position: relative;
	width: 120px;
	height: 30px;

	& li {
		position: relative;
		width: 100%;
		height: 100%;
		font-size: 12px;
		color: ${(props) => props.theme.colors.txtLangBtn};
		background-color: ${(props) => props.theme.colors.bgLangBtn};
		font-weight: bold;
		transition: transform 0.3s;

		&:nth-child(1) {
			border-radius: 6px;
			z-index: 2;

			& a {
				pointer-events: none;
				display: flex;
				justify-content: space-between;
				align-items: center;
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
			border-radius: 0 0 6px 6px;
		}

		& a {
			display: grid;
			align-items: center;
			height: 100%;
			padding: 0 8px;
		}
	}

	&.open {
		& li:nth-child(1) {
			border-radius: 6px 6px 0 0;
		}
		& li:nth-child(2) {
			transform: none;
		}
		& li:nth-child(3) {
			transform: none;
		}
	}
`;

export default function LanguageButton() {
	return (
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
	);
}
