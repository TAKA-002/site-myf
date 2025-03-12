import styled from "styled-components";
import Link from "next/link";
import { Earth } from "lucide-react";

const Wrapper = styled.ul`
	width: 120px;
	height: 30px;
	overflow: hidden;
	border-radius: 9999px;

	& li {
		width: 100%;
		height: 100%;
		font-size: 10px;
		color: ${(props) => props.theme.colors.txtLangBtn};
		background-color: ${(props) => props.theme.colors.bgLangBtn};
		font-weight: bold;

		&:not(:first-child) {
			opacity: 0;
			display: none;
		}

		&:first-child {
			& a {
				pointer-events: none;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		& a {
			display: grid;
			align-items: center;
			height: 100%;
			padding: 0 8px;
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
