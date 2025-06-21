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
        'rounded-full bg-primary/80 px-8 py-2 leading-none font-semibold text-primary-foreground',
      )}
    >
      <ul className="flex items-center gap-4 uppercase">
        {items.map((item) => (
          <li key={item.name} className="h-fit">
            <span className="h-fit">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
