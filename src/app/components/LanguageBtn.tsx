import Link from "next/link";

export default function LanguageBtn() {
	return (
		<div>
			<div>Language</div>
			<ul>
				<li>
					<Link href="">Japanese</Link>
				</li>
				<li>
					<Link href="./en/">English</Link>
				</li>
			</ul>
		</div>
	);
}
