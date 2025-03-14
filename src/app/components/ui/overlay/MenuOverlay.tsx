import { ReactNode } from "react";
import styled from "styled-components";
import { useMenu } from "../../../context/MenuContext";

const OverlayDiv = styled.div`
	position: absolute;
	inset: 0;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.overlay};
	z-index: -1;
	transition: opacity 0.5s;

	&.open {
		opacity: 0.8;
		z-index: 10;
	}
`;

export default function MenuOverlay({ children }: { children: ReactNode }) {
	const { isOpen, closeMenu } = useMenu();

	return (
		<OverlayDiv className={isOpen ? "open" : ""} onClick={closeMenu}>
			{children}
		</OverlayDiv>
	);
}
