import { cn } from '@/modules/core/lib/utils'
import { links } from '../data/links'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/modules/core/components/ui/button'

export default function LinksScreen() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center">
			<div className="flex w-full max-w-lg flex-col gap-3">
				{links.map((link) => (
					<Link className={cn(buttonVariants({ variant: 'secondary' }))} key={link.title} to={link.link}>
						<link.icon className="h-4 w-4 shrink-0" />
						{link.title}
					</Link>
				))}
			</div>
		</div>
	)
}
