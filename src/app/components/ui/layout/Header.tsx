"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Nav from "../navigation/HeaderNav";
import { MenuBtn, LangBtn } from "../buttons";

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

const Header = styled.header`
	background-color: ${(props) => props.theme.colors.bgHeader};
	position: relative;
	z-index: 20;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	max-width: 960px;
	margin-inline: auto;
	padding: 4px 8px;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
`;

const StyledLink = styled(Link)`
	max-width: 365px;
	width: 100%;
	height: auto;
	aspect-ratio: 365 / 63;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default function MainHeader() {
	return (
		<Header>
			<Wrapper>
				<StyledLink href="/">
					<Image src="/images/common/logo.png" alt="ガーナの未来ある子供達に笑顔と教育を！マンフィーと青年基金NGO" width={365} height={63} />
				</StyledLink>

				<BtnWrapper>
					<LangBtn />
					<MenuBtn />
				</BtnWrapper>
			</Wrapper>

			{/* <Nav navData={nav} /> */}
		</Header>
	);
}
