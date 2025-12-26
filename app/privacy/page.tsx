import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Leander Scherer",
	description: "Privacy policy for schererleander.de",
};

export default function PrivacyPage() {
	return (
		<div className="max-w-2xl mx-auto py-12 space-y-8">
			<div>
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="text-muted-foreground leading-relaxed">
					This site respects your privacy. It does not use cookies and does not collect any personal data. The source code is available on <Link href="https://github.com/schererleander/site" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">GitHub</Link>.
				</p>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Analytics</h2>
				<p className="text-muted-foreground leading-relaxed">
					I use <Link href="https://plausible.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">Plausible Analytics</Link> to collect anonymous usage statistics. Plausible is a privacy-focused analytics tool that does not use cookies and is fully compliant with GDPR, CCPA, and PECR.
				</p>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Maps</h2>
				<p className="text-muted-foreground leading-relaxed">
					The map on this website uses <Link href="https://carto.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">Carto</Link> for basemaps. When you view the map, your browser makes requests to Carto to load the map tiles.
				</p>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Contact</h2>
				<p className="text-muted-foreground leading-relaxed">
					If you have any questions about this privacy policy, please contact me at <Link href="mailto:leander@schererleander.de" className="underline underline-offset-4 hover:text-foreground">leander@schererleander.de</Link>.
				</p>
			</div>
		</div>
	);
}
