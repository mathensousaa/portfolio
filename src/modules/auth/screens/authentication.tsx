import DotPattern from '@core/components/ui/dot-pattern'
import { cn } from '@core/lib/utils'
import learningBro from '@core/assets/learning-bro.svg'
import background from '@core/assets/background.svg'
import tabletLogo from '@core/assets/tablet-logo.png'
import { Link } from 'react-router-dom'
import LoginForm from '../components/login-form'
import Footer from '@/modules/core/components/footer'

export default function AuthenticationScreen() {
	return (
		<>
			<div className="flex h-fit w-full flex-col p-3 md:h-svh md:flex-row md:gap-6 md:p-6">
				<div className="relative flex h-svh items-center justify-center md:h-full md:flex-1">
					<Link to="/" className="absolute top-0 left-0">
						<h1 className="text-primary">SIRE.EDU</h1>
					</Link>
					<div className="flex w-full max-w-md flex-col gap-4">
						<div className="w-full border-border border-b py-2">
							<div className="space-y-4">
								<img alt="Logo" className="inset-x-0 mx-auto max-w-20" src={tabletLogo} />
								<h2>Login</h2>
							</div>
							<span className="text-lg text-muted-foreground">
								Bem-vindo de volta! Acesse sua conta e continue sua jornada de aprendizado.
							</span>
						</div>
						<LoginForm />
						<Link to="/cadastro" className="text-center text-primary text-sm hover:underline">
							Não tem uma conta? Cadastre-se
						</Link>
					</div>
				</div>
				<div className="relative flex h-svh flex-col items-center justify-center rounded-2xl bg-primary/65 p-3 text-center md:h-full md:flex-1 md:p-6 dark:bg-primary">
					<DotPattern
						className={cn(
							'absolute inset-0 mx-auto fill-background [mask-image:radial-gradient(640px_circle_at_center,white,transparent)] dark:fill-background/50',
						)}
					/>
					<h2 className="z-50 text-background dark:text-foreground">
						Explore estudos personalizados e ferramentas exclusivas para potencializar seu aprendizado
					</h2>
					<div className="relative aspect-square w-full max-w-lg">
						<img src={background} alt="Fundo" className="absolute drop-shadow-2xl" />
						<img src={learningBro} alt="Garoto estudando" className="absolute drop-shadow-2xl" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
