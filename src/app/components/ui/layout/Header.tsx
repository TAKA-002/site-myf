"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { MenuBtn, LangBtn } from "../buttons";
import { useLang } from "../../../context/LanguageContext";

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
	const { isEnPage } = useLang();
	const headerLinks = {
		ja: {
			href: "/",
			img: "/images/common/logo.png",
			alt: "ガーナの未来ある子供達に笑顔と教育を！マンフィーと青年基金NGO",
		},
		en: {
			href: "/en",
			img: "/images/common/logo_en.png",
			alt: "Monphy and Youth Foundation NGO",
		},
	};

	return (
		<Header>
			<Wrapper>
				<StyledLink href={isEnPage ? headerLinks.en.href : headerLinks.ja.href}>
					<Image src={isEnPage ? headerLinks.en.img : headerLinks.ja.img} alt={isEnPage ? headerLinks.en.alt : headerLinks.ja.alt} width={365} height={63} />
				</StyledLink>

				<BtnWrapper>
					<LangBtn />
					<MenuBtn />
				</BtnWrapper>
			</Wrapper>
		</Header>
	);
}
