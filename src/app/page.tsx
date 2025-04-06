import TextFill from '@/components/Text-Fill'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-2 p-3 pb-20 text-center sm:p-20">
      <main className="row-start-2 flex w-full flex-col items-center justify-center text-center">
        <TextFill>matheusousa.dev</TextFill>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mathensousaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="h-4 w-4 text-accent-foreground" />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/matheus-de-sousa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon className="h-4 w-4 text-muted-foreground" />
          Linkedin
        </a>
      </footer>
    </div>
  )
}
