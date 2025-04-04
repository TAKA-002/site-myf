import Section from "@/components/ui/layout/Section";
import VideoHeader from "@/components/ui/video/VideoHeader";
import TimelineList from "@/components/ui/list/TimelineList";

export default function ProjectContent({ lang }: { lang: string }) {
	return (
		<>
			<Section cusCls="video">
				<VideoHeader category="Project" />
			</Section>

			<Section>
				<TimelineList />
			</Section>
		</>
	);
}
