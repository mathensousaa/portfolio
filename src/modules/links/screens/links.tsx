import { cn } from '@/modules/core/lib/utils'
import { links } from '../data/links'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/modules/core/components/ui/button'
import FlickeringGrid from '@/modules/core/components/ui/flickering-grid'

export default function LinksScreen() {
	return (
		<div className="relative flex min-h-svh w-full flex-col items-center gap-2">
			<div className="relative w-full overflow-hidden border-b-[30%]">
				<FlickeringGrid
					className="relative inset-0 z-0 grow [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
					squareSize={4}
					gridGap={6}
					color="#fffce1"
					maxOpacity={0.5}
					flickerChance={0.1}
					height={200}
					width={1200}
				/>
			</div>

			<div className="size-28 rounded-full bg-primary" />
			<div className="w flex w-full items-center justify-center">
				<div className="flex w-full max-w-lg flex-col gap-3">
					{links.map((link) => (
						<Link
							className={cn(
								buttonVariants({ variant: 'default' }),
								'w-full gap-2 border-primary border-opacity-75',
							)}
							key={link.title}
							to={link.link}
						>
							<link.icon className="h-4 w-4 shrink-0" />
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
