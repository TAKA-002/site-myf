import SectionHeadingLevel2nd from "./components/ui/heading/SectionHeadingLevel2nd";
import Section from "./components/ui/layout/Section";
import Swiper from "./components/ui/slider/swiper";

export default function Home() {
	return (
		<>
			<Section name="slider">
				<Swiper />
			</Section>
			<Section>
				<SectionHeadingLevel2nd text="News" />
			</Section>
		</>
	);
}
