import SectionHeadingLevel2nd from "@/components/ui/heading/SectionHeadingLevel2nd";
import Section from "@/components/ui/layout/Section";
import Swiper from "@/components/ui/slider/swiper";
import Notice from "@/components/ui/list/Notice";
import FirstViewMotif from "@/components/decoration/FirstViewMotif";
import { Paragraph } from "@/components/ui/text/Paragraph";
import { Card } from "@/components/ui/card/Cards";
import { MoreBtn } from "@/components/ui/buttons/Button";
import { Wrapper } from "@/components/ui/layout/Wrapper";

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
					needMargin
				>
					私達は多くのスタッフがいるわけではありません。 ですが、皆さんと一緒に少しでも恵まれない子どもたちに手を差し伸べられるように努めてまいります。
				</Paragraph>
				<Card />
				<Wrapper>
					<MoreBtn href="/about-us" />
				</Wrapper>
			</Section>
		</>
	);
}
