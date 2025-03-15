import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { nav } from "../../../constants/navigations";
import { useLang } from "../../../context/LanguageContext";

const NavUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: min(6.4vw, 24px);

	& li {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;

		&:nth-child(1) {
			transition-delay: 0.2s;
		}
		&:nth-child(2) {
			transition-delay: 0.3s;
		}
		&:nth-child(3) {
			transition-delay: 0.4s;
		}
		&:nth-child(4) {
			transition-delay: 0.5s;
		}
		&:nth-child(5) {
			transition-delay: 0.6s;
		}

		& a {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: min(5.71vw, 16px);
			color: ${(props) => props.theme.colors.txtNav};
			font-weight: bold;

			&::before {
				content: "";
				display: inline-block;
				width: 16px;
				height: 16px;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}

			&.icon-about-us {
				&::before {
					background-image: url(/images/common/icon_about-us.png);
				}
			}
			&.icon-project {
				&::before {
					background-image: url(/images/common/icon_project.png);
				}
			}
			&.icon-blog {
				&::before {
					background-image: url(/images/common/icon_blog.png);
				}
			}
			&.icon-donate {
				&::before {
					background-image: url(/images/common/icon_donate.png);
				}
			}
		}
	}

	.open & li {
		transform: translateY(0);
		opacity: 1;
	}
`;

export default function NavList() {
	const pathname = usePathname();
	const { isEngPage } = useLang();

	return (
		<nav>
			<NavUl>
				{nav.map((n, index) => {
					return (
						<li key={index}>
							<Link href={isEngPage ? n.enLink : n.link} className={pathname === n.enLink ? `active ${n.iconCls}` : n.iconCls}>
								{isEngPage ? n.enText : n.text}
							</Link>
						</li>
					);
				})}
			</NavUl>
		</nav>
	);
}
