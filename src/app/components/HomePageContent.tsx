import parse from "html-react-parser";
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
import { HomePageTexts } from "@/constants/HomePageTexts";

export default function HomePageContent({ lang }: { lang: string }) {
	return (
		<>
			<Section cusCls="slider">
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
					{parse(lang === "en" ? HomePageTexts.en.aboutUsMsg : HomePageTexts.ja.aboutUsMsg)}
				</Paragraph>
				<Card data={aboutUsCardData} />
				<Wrapper>
					<MoreBtn href={lang === "en" ? "/about-us/en" : "/about-us"} />
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
					{parse(lang === "en" ? HomePageTexts.en.projectMsg : HomePageTexts.ja.projectMsg)}
				</Paragraph>
				<Card data={projectCardData} />
				<Wrapper>
					<MoreBtn href={lang === "en" ? "/project/en" : "/project"} />
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
					{parse(lang === "en" ? HomePageTexts.en.donateMsg : HomePageTexts.ja.donateMsg)}
				</Paragraph>
				<Wrapper>
					<MoreBtn href={lang === "en" ? "/donate/en" : "/donate"} />
				</Wrapper>
			</Section>
		</>
	);
}
