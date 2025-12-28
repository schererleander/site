import { ToolsGrid } from "@/components/tools-grid";
import { ProjectsGrid } from "@/components/projects-grid";
import { PostCard } from "@/components/post-card";
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import MapWrapper from "@/components/map-wrapper";

export default function Home() {
	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

	return (
		<>
			<div className="w-full relative z-0">
				<MapWrapper />
			</div>

			<section className="text-center space-y-2 -mt-8 relative z-10 pointer-events-none mb-12">
				<div className="pointer-events-auto">
					<h2 className="text-2xl font-bold mix-blend-luminosity text-foreground">Hi, I&apos;m Leander.</h2>
					<p className="text-muted-foreground/60 max-w-lg mx-auto">
						Interested in hardware & software, pursuing computer science studies. Currently building 3D-printing projects and exploring homelabing.
					</p>
				</div>
			</section>

			<section className="mt-8 mx-auto w-full">
				<ToolsGrid />
			</section>
			<section className="mt-8 mx-auto w-full">
				<ProjectsGrid />
			</section>

			<section className="mt-8 mx-auto w-full">
				{posts.map((post, idx) => (
					<PostCard key={idx} {...post} />
				))}
			</section>
		</>
	);
}
