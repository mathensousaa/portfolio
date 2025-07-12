import { cc } from '@/libs/classes-combine'

const items = [
  {
    name: 'Resumo',
  },
  {
    name: 'Projetos',
  },
  {
    name: 'Sobre mim',
  },
]

export const NavBar = () => {
  return (
    <nav
      aria-label="Menu principal"
      className={cc(
        'rounded-full bg-primary/80 px-3 py-1 text-xs font-bold text-primary-foreground/75 md:px-8 md:py-2 md:text-lg',
      )}
    >
      <ul className="flex items-center gap-4 uppercase">
        {items.map((item) => (
          <li key={item.name} className="h-fit hover:cursor-pointer hover:text-primary-foreground">
            <span className="h-fit">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
