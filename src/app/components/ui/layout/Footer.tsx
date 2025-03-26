import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import Copyright from "@/components/ui/text/Copyright";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from "@/components/ui/layout/Footer.module.scss";

export default function MainFooter() {
	const { isEnPage } = useLang();
	const heading = isEnPage ? "Monphy and Youth Foundation NGO" : "マンフィーと青年基金NGO";
	const address = isEnPage ? "Tsukasa Building 201,3-3-1,Shinkamata,Ota-ku, Tokyo-to Japan" : "東京都大田区新蒲田3-3-1 つかさビル201";

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__upper}>
				<div className={styles.footer__bg}></div>
				<div className={styles.footer__info}>
					<div>
						<h3>{heading}</h3>
						<address>
							<p>〒 144-0054</p>
							<p>{address}</p>
							<p>info@monphy.com</p>
							<p>070-4354-8648</p>
						</address>
					</div>
					<div>
						<Link
							href="https://www.facebook.com/monphy.gh.ngo/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FaFacebookSquare />
						</Link>
						<Link
							href="https://twitter.com/MonphyNGO"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FaSquareXTwitter />
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.footer__under}>
				<Copyright />
			</div>
		</footer>
	);
}
