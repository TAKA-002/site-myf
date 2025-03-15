"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { nav } from "../../../constants/navigations";
import { useLang } from "../../../context/LanguageContext";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";

const SwiperContainer = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
	position: relative;
	left: 50%;
	width: 100%;
	padding-bottom: 24px;
	transform: translateX(-50%);

	@media screen and (min-width: ${(props) => props.theme.breakpoint.MvSlider}) {
		padding-top: 24px;
		width: 130%;
	}
`;

const StyledSwiperSlide = styled(SwiperSlide)`
	overflow: hidden;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	aspect-ratio: 16 / 9;

	@media screen and (min-width: ${(props) => props.theme.breakpoint.MvSlider}) {
		border-radius: 8px;
	}

	&.swiper-slide-active {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
	}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default () => {
	const { isEngPage } = useLang();
	return (
		<SwiperContainer>
			<StyledSwiper
				slidesPerView={1}
				speed={800} // トランジション速度をミリ秒で指定（デフォルトは300）
				effect={"coverflow"}
				grabCursor={true}
				autoplay={{
					delay: 3000, // スライド間の待機時間（ミリ秒）
					disableOnInteraction: false, // ユーザー操作後も自動再生を続けるか
					pauseOnMouseEnter: true, // マウスオーバー時に一時停止するか
					stopOnLastSlide: false, // 最後のスライドで停止するか
					reverseDirection: false, // 逆方向に自動再生するか
					waitForTransition: true, // トランジション完了を待つか
				}}
				loop={true}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 3,
					},
				}}
				modules={[Autoplay, EffectCoverflow]}
				className="mySwiper"
			>
				{nav
					.filter((n) => n.img !== "")
					.map((n, index) => {
						return (
							<StyledSwiperSlide key={index}>
								<Link href={isEngPage ? n.enLink : n.link}>
									<Image src={`/images/mv/${isEngPage ? n.enImg : n.img}`} alt={isEngPage ? n.enText : n.text} width={640} height={360} />
								</Link>
							</StyledSwiperSlide>
						);
					})}
			</StyledSwiper>
		</SwiperContainer>
	);
};
