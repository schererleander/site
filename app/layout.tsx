import PlausibleProvider from "next-plausible";
import { Noise } from "@/components/noise";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "߸ Leander Scherer",
	description: "Hey I'm Leander, a computer science student passionate about hardware and software, building 3D printing projects and learning Nix.",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<PlausibleProvider
					domain="schererleander.de"
					customDomain="https://analytics.schererleander.de"
					selfHosted
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="relative min-h-full px-4">
							<Header />
							<main className="mx-auto max-w-[var(--site-width)]">
								{children}
							</main>
							<Footer />
							<Noise />
						</div>
					</ThemeProvider>
				</PlausibleProvider>
			</body>
		</html>
	);
}
