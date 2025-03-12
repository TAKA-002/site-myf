import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.ul`
	width: 120px;
	height: 30px;
	overflow: hidden;
	background-color: ${(props) => props.theme.colors.bgLangBtn};

	& li {
		width: 100%;
		height: 100%;
		font-size: 10px;
		color: ${(props) => props.theme.colors.txtLangBtn};

		&:first-child {
			& a {
				pointer-events: none;
			}
		}

		& a {
			display: block;
			height: 100%;
		}
	}
`;

export default function LanguageButton() {
	return (
		<Wrapper>
			<li>
				<a>Language</a>
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
