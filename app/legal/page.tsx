import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Leander Scherer",
	description: "Privacy policy for schererleander.de",
};

export default function PrivacyPage() {
	return (
		<div className="py-12 space-y-10">
			<section className="space-y-4">
				<h1 className="text-2xl font-bold">Privacy Policy</h1>
				<p className="text-muted-foreground leading-relaxed">
					This website does not use cookies and does not collect personal data. The source code is available on <Link href="https://github.com/schererleander/site" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">GitHub</Link>.
				</p>
			</section>

		<section className="space-y-3">
			<h2 className="text-xl font-semibold">Hosting</h2>
			<p className="text-muted-foreground leading-relaxed">
				I use <Link href="https://www.ionos.de" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">Ionos</Link> to host this website. To ensure security and operational stability, I log the following visitor data:
			</p>

				<ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
					<li>IP address</li>
					<li>Date and time of access</li>
					<li>Browser information and operating system</li>
				</ul>
			</section>
		</div>
	);
}
