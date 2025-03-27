import SectionHeadingLevel2nd from "@/components/ui/heading/SectionHeadingLevel2nd";
import Section from "@/components/ui/layout/Section";
import MainSlider from "@/components/ui/slider/swiper";
import DonateSlider from "@/components/ui/slider/donate";
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
				<MainSlider />
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
					We don&apos;t have a lot of staff.
					<br />
					However, we will work with you to reach out to the underprivileged children.
				</Paragraph>
				<Card data={aboutUsCardData} />
				<Wrapper>
					<MoreBtn href="/about-us/en" />
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
					Since the start of the NGO, we have been engaged in various activities. However, many of our activities are temporary support, not continuous support.
					<br />
					It is not a fundamental solution in the situation of &quot;pass it and it&apos;s done&quot;.
					<br />
					&quot;Education as continuous support&quot;
					<br />
					We are looking for a solution to the underlying problem from this activity.
				</Paragraph>
				<Card data={projectCardData} />
				<Wrapper>
					<MoreBtn href="/project/en" />
				</Wrapper>
			</Section>

			<Section>
				<SectionHeadingLevel2nd text="Donate" />
				<DonateSlider />
				<Paragraph
					maxWidth="600px"
					marginInline="auto"
					align="center"
					needMargin
				>
					Our activities are based on your support.
					<br />
					There are many things that have been achieved thanks to the support of many people little by little.
					<br />
					We hope that you will continue to understand this.
				</Paragraph>
				<Wrapper>
					<MoreBtn href="/donate/en" />
				</Wrapper>
			</Section>
		</>
	);
}
