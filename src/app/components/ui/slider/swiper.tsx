"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={30}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<div style={{ height: "300px", background: "#f1f1f1", display: "flex", justifyContent: "center", alignItems: "center" }}>スライド 1</div>
			</SwiperSlide>
			<SwiperSlide>
				<div style={{ height: "300px", background: "#e1e1e1", display: "flex", justifyContent: "center", alignItems: "center" }}>スライド 2</div>
			</SwiperSlide>
			<SwiperSlide>
				<div style={{ height: "300px", background: "#d1d1d1", display: "flex", justifyContent: "center", alignItems: "center" }}>スライド 3</div>
			</SwiperSlide>
		</Swiper>
	);
};
