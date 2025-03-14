import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = [
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
	gap: 24px;

	& li {
		& a {
			font-size: min(3.73vw, 16px);
			color: ${(props) => props.theme.colors.txtNav};
			font-weight: bold;
		}
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
