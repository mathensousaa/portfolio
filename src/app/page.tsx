import { LoadingScreen } from '@/components/sections/entrance-screen'
import { Header } from '@/components/sections/header'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="relative inset-x-0 mx-auto w-full max-w-[1920px]">
        <Header className="max-w-[1920px]" />
      </div>
    </>
  )
}
