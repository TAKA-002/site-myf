import SectionHeadingLevel2nd from "@/components/ui/heading/SectionHeadingLevel2nd";
import Section from "@/components/ui/layout/Section";
import Swiper from "@/components/ui/slider/swiper";
import Notice from "@/components/ui/list/Notice";
import FirstViewMotif from "@/components/decoration/FirstViewMotif";
import { Paragraph } from "@/components/ui/text/Paragraph";
import { Card } from "@/components/ui/card/Cards";
import { MoreBtn } from "@/components/ui/buttons/Button";
import { Wrapper } from "@/components/ui/layout/Wrapper";
import { aboutUsCardData, projectCardData } from "@/constants/Cards";

export default function Home() {
	return (
		<>
			<Section name="slider">
				<Swiper />
			</Section>

			<Section>
				<SectionHeadingLevel2nd text="Notice" />
				<Notice />
			</Section>

			<Section>
				<SectionHeadingLevel2nd text="About Us" />
				<FirstViewMotif />
				<Paragraph
					maxWidth="600px"
					marginInline="auto"
					align="center"
					needMargin
				>
					私達は多くのスタッフがいるわけではありません。
					<br />
					ですが、皆さんと一緒に少しでも恵まれない子どもたちに手を差し伸べられるように努めてまいります。
				</Paragraph>
				<Card data={aboutUsCardData} />
				<Wrapper>
					<MoreBtn href="/about-us" />
				</Wrapper>
			</Section>

			<Section>
				<SectionHeadingLevel2nd text="Project" />
				<Paragraph
					maxWidth="600px"
					marginInline="auto"
					align="center"
					needMargin
				>
					NGOがスタートしてから、様々な活動を行ってきましたが、我々の活動の多くは一時的な支援であり継続した支援にはなりません。
					<br />
					「渡したら終わり」
					<br />
					このような対応では根本的な解決にはなりません。
					<br />
					「継続的な支援として教育を」
					<br />
					根本的な問題の解決をこの活動から模索しています。
				</Paragraph>
				<Card data={projectCardData} />
				<Wrapper>
					<MoreBtn href="/project" />
				</Wrapper>
			</Section>
		</>
	);
}
