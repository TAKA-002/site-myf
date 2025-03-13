import styled from "styled-components";
import { useMenu } from "../../../context/MenuContext";

const Button = styled.button`
	width: 44px;

	& > span {
		display: block;
		width: 100%;
		height: 3px;
		background-color: ${(props) => props.theme.colors.bgMenuBtn};
		margin-bottom: 9px;
		cursor: pointer;
		border-radius: 9999px;
		transition:
			transform 0.7s,
			opacity 0.7s;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&.open {
		& > span:nth-child(1) {
			transform: translateY(13px) rotate(135deg);
		}

		& > span:nth-child(2) {
			transform: translateX(44px);
			opacity: 0;
		}

		& > span:nth-child(3) {
			transform: translateY(-11px) rotate(405deg);
		}
	}
`;

export default function MenuButton() {
	const { isOpen, toggleMenu } = useMenu();

	return (
		<Button className={isOpen ? "open" : ""} onClick={toggleMenu}>
			<span></span>
			<span></span>
			<span></span>
		</Button>
	);
}
