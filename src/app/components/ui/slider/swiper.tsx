"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { nav } from "../../../constants/navigations";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const StyledSwiper = styled(Swiper)`
	width: 100%;
	padding: 24px 0;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
	/* background-position: center; */
	/* background-size: cover; */
	/* width: 300px; */
	/* height: 300px; */

	/* & img {
		display: block;
		width: 100%;
	} */
`;

export default () => {
	return (
		<StyledSwiper
			slidesPerView={3}
			effect={"coverflow"}
			grabCursor={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			loop={true}
			centeredSlides={true}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={{ clickable: true }}
			modules={[Autoplay, EffectCoverflow, Pagination]}
			className="mySwiper"
		>
			{nav.map((n, index) => {
				if (n.img !== "") {
					return (
						<StyledSwiperSlide key={index}>
							<img src={`/images/mv/${n.img}`} alt={n.text} />
						</StyledSwiperSlide>
					);
				}
			})}
		</StyledSwiper>
	);
};
