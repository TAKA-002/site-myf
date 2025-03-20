"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { nav } from "@/constants/navigations";
import { useLang } from "@/context/LanguageContext";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "@/components/ui/slider/swiper.module.scss";
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default () => {
	const { isEnPage } = useLang();

	return (
		<div className={styles.mySwiperContainer}>
			<Swiper
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
				className={styles.mySwiper}
			>
				{nav
					.filter((n) => n.img !== "")
					.map((n, index) => {
						return (
							<SwiperSlide className={styles.mySwiperSlide} key={index}>
								<Link href={isEnPage ? n.enLink : n.link}>
									<Image src={`/images/mv/${isEnPage ? n.enImg : n.img}`} alt={isEnPage ? n.enText : n.text} width={640} height={360} />
								</Link>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};
