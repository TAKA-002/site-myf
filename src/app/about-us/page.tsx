import Section from "@/components/ui/layout/Section";
import VideoHeader from "@/components/ui/video/VideoHeader";
import TimelineList from "@/components/ui/list/TimelineList";

export default function AboutUs() {
	return (
		<>
			<Section cusCls="video">
				<VideoHeader category="About Us" />
			</Section>

			<Section>
				<TimelineList />
			</Section>
		</>
	);
}
