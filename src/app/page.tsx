import SectionHeadingLevel2nd from "@/components/ui/heading/SectionHeadingLevel2nd";
import Section from "@/components/ui/layout/Section";
import Swiper from "@/components/ui/slider/swiper";
import Notice from "@/components/ui/list/Notice";
import FirstViewMotif from "@/components/decoration/FirstViewMotif";

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
			</Section>
		</>
	);
}
