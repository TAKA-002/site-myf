import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.ul`
	width: 120px;
	height: 30px;
	overflow: hidden;

	& li {
		width: 100%;
		height: 100%;
		font-size: 10px;
		color: ${(props) => props.theme.colors.txtLangBtn};
		background-color: ${(props) => props.theme.colors.bgLangBtn};

		&:not(:first-child) {
			opacity: 0;
			display: none;
		}

		&:first-child {
			& a {
				pointer-events: none;
			}
		}

		& a {
			display: grid;
			align-items: center;
			height: 100%;
			padding-left: 8px;
		}
	}
`;

export default function LanguageButton() {
	return (
		<Wrapper>
			<li>
				<a href="#">Language</a>
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
