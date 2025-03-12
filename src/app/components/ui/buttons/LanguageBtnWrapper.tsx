import { ReactNode } from "react";
import styled from "styled-components";

interface LangBtnWrapperProps {
	children: ReactNode;
}

const LangBtnWrapper = styled.div`
	/* 579pxまで表示。580pxから非表示。 */
	body > & {
		position: absolute;
		z-index: 20;
		right: 0;
		bottom: 120px;
		display: block;

		@media screen and (min-width: ${(props) => props.theme.breakpoint.LangBtn}) {
			display: none;
		}
	}

	/* 579pxまで非表示。580pxから表示。 */
	display: none;

	@media screen and (min-width: ${(props) => props.theme.breakpoint.LangBtn}) {
		display: block;
	}
`;

export default function LanguageBtnWrapper({ children }: LangBtnWrapperProps) {
	return <LangBtnWrapper>{children}</LangBtnWrapper>;
}
