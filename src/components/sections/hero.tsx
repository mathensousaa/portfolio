import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import type React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="container flex min-h-svh w-full flex-col items-center justify-center bg-cover bg-center text-center text-white">
      <h1 className="mb-1 text-4xl font-bold text-tertiary lowercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        Matheus de Sousa
      </h1>

      <p className="mb-6 text-sm leading-tight font-medium text-muted-foreground sm:text-base md:text-lg lg:text-xl">
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
