import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
 
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 text-center sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center justify-center">
        <h1 className="text-black text-stroke-3 text-9xl font-semibold">matheusousa.dev</h1>
        <span className=" text-3xl text-muted-foreground uppercase font-semibold">In progress...</span>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mathensousaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon
            className="w-4 h-4 text-accent-foreground"
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/matheus-de-sousa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon
            className="w-4 h-4 text-muted-foreground"
          />
          Linkedin
        </a>
      </footer>
    </div>
  );
}
