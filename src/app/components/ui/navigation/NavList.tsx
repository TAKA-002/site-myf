import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = [
	{
		link: "/",
		iconCls: "",
		text: "ホーム",
	},
	{
		link: "/about-us",
		iconCls: "icon-about-us",
		text: "チームについて",
	},
	{
		link: "/project",
		iconCls: "icon-project",
		text: "プロジェクト",
	},
	{
		link: "/blog",
		iconCls: "icon-blog",
		text: "ブログ",
	},
	{
		link: "/donate",
		iconCls: "icon-donate",
		text: "ご寄付について",
	},
];

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
			font-size: min(5.71vw, 16px);
			color: ${(props) => props.theme.colors.txtNav};
			font-weight: bold;
		}
	}

	.open & li {
		transform: translateY(0);
		opacity: 1;
	}
`;

export default function NavList() {
	const pathname = usePathname();

	return (
		<nav>
			<NavUl>
				{nav.map((n, index) => {
					return (
						<li key={index}>
							<Link href={n.link} className={pathname === n.link ? `active ${n.iconCls}` : n.iconCls}>
								{n.text}
							</Link>
						</li>
					);
				})}
			</NavUl>
		</nav>
	);
}
