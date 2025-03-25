import SectionHeadingLevel2nd from "@/components/ui/heading/SectionHeadingLevel2nd";
import Section from "@/components/ui/layout/Section";
import Swiper from "@/components/ui/slider/swiper";
import Notice from "@/components/ui/list/Notice";
import FirstViewMotif from "@/components/decoration/FirstViewMotif";
import { Paragraph } from "@/components/ui/text/Paragraph";
import Card from "@/components/ui/card/AboutUsCard";

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
					align="left"
					marginInline="auto"
				>
					We don't have a lot of staff. However, we will work with you to reach out to the underprivileged children.
				</Paragraph>
				<Card />
			</Section>
		</>
	);
}
