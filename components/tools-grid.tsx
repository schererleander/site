import { Card } from "@/components/ui/card";
import { GitGraph, Coffee, Terminal, Box, Snowflake, Code } from 'lucide-react';

const tools = [
	{
		name: 'Git',
		icon: GitGraph,
		color: 'group-hover:text-[#F05032]'
	},
	{
		name: 'Java',
		icon: Coffee,
		color: 'group-hover:text-[#5382a1]'
	},
	{
		name: 'Python',
		icon: Code,
		color: 'group-hover:text-[#FFE873]'
	},
	{
		name: 'Nix',
		icon: Snowflake,
		color: 'group-hover:text-[#5277C3]'
	},
	{
		name: 'Docker',
		icon: Box,
		color: 'group-hover:text-[#2496ED]'
	},
	{
		name: 'Linux',
		icon: Terminal,
		color: 'group-hover:text-[#FCC624]'
	},
];

export function ToolsGrid() {
	return (
		<div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-4xl mx-auto">
			{tools.map((tool) => (
				<Card
					key={tool.name}
					className="group flex flex-col items-center justify-center gap-2 p-4 bg-card/50 hover:bg-card/80 transition-all duration-300 shadow-none"
				>
					<tool.icon
						className={`w-6 h-6 text-muted-foreground transition-colors duration-300 ${tool.color}`}
						strokeWidth={1.5}
					/>
					<span className="text-xs font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
						{tool.name}
					</span>
				</Card>
			))}
		</div>
	);
}
