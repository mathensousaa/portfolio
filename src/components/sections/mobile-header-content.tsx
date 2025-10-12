import { LanguageSwitcher } from '@/components/language-switcher'
import { NavBar } from '@/components/sections/navbar'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export const MobileHeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="size-5" />
      </Button>
      {isOpen && (
        <div className="absolute top-0 left-0 h-full w-full bg-secondary/30">
          <NavBar />
          <LanguageSwitcher />
        </div>
      )}
    </>
  )
}
