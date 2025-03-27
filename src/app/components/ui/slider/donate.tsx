"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "@/components/ui/slider/donate.module.scss";
import { Autoplay, EffectFade } from "swiper/modules";

const images = ["3yearsold-dora.jpg", "after-donate-dora.jpg", "borad.jpg", "boy-with-note.jpg", "donate.jpg"];

export default function DonateSlider() {
	return (
		<div className={styles.mySwiperContainer}>
			<Swiper
				slidesPerView={1}
				speed={800} // トランジション速度をミリ秒で指定（デフォルトは300）
				autoplay={{
					delay: 3000, // スライド間の待機時間（ミリ秒）
					disableOnInteraction: false, // ユーザー操作後も自動再生を続けるか
					pauseOnMouseEnter: true, // マウスオーバー時に一時停止するか
					stopOnLastSlide: false, // 最後のスライドで停止するか
					reverseDirection: false, // 逆方向に自動再生するか
					waitForTransition: true, // トランジション完了を待つか
				}}
				loop={true}
				effect="fade"
				modules={[Autoplay, EffectFade]}
				className={styles.mySwiper}
			>
				{images.map((img, index) => {
					return (
						<SwiperSlide
							className={styles.mySwiperSlide}
							key={index}
						>
							<Image
								src={`/images/top/${img}`}
								alt=""
								width={640}
								height={360}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
