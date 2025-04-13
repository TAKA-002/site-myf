import Section from "@/components/ui/layout/Section";
import VideoHeader from "@/components/ui/video/VideoHeader";
import TimelineList from "@/components/ui/list/TimelineList";
import { Card } from "@/components/ui/card/Cards";
import { categoryData } from "@/constants/Cards";

export default function AboutUsContent({ lang }: { lang: string }) {
	return (
		<>
			<Section cusCls="video">
				<VideoHeader category="About Us" />
			</Section>

			<Section>
				<TimelineList />
			</Section>

			<Section>
				<Card data={categoryData} />
			</Section>
		</>
	);
}
