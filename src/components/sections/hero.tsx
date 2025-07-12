import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import type React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      className="flex min-h-svh flex-col items-center justify-center bg-cover bg-center text-center text-white"
      style={{ backgroundImage: "url('/public/next.svg')" }}
    >
      <h1 className="mb-1 text-9xl font-bold text-tertiary lowercase">Matheus de Sousa</h1>
      <p className="mb-6 text-xl font-medium text-muted-foreground">
        Desenvolvo experiências digitais com foco no usuário, cuidado nos detalhes e alto padrão de
        qualidade.
      </p>
      <div className="flex space-x-4">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mathensousaa"
          target="_blank"
        >
          <GitHubLogoIcon className="h-4 w-4 text-muted-foreground" />
          Github
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/matheus-de-sousa/"
          target="_blank"
        >
          <LinkedInLogoIcon className="h-4 w-4 text-muted-foreground" />
          Linkedin
        </Link>
      </div>
    </section>
  )
}

export default Hero
