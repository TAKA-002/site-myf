import styled from "styled-components";

const Overlay = styled.div`
	position: absolute;
	inset: 0;
	opacity: 0;
	display: inline-block;
	background-color: ${(props) => props.theme.colors.overlay};
	z-index: -1;
	transition: opacity 0.5s;

	&.open {
		opacity: 0.6;
		z-index: 10;
	}
`;

export default function MenuOverlay() {
	return <Overlay></Overlay>;
}
