import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutBand } from './sections/AboutBand'
import { Capability } from './sections/Capability'
import { Connect } from './sections/Connect'
import { HeroStage } from './sections/HeroStage'
import { Work } from './sections/Work'

export default function App() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <main>
        <HeroStage />
        <Work />
        <AboutBand />
        <Capability />
        <Connect />
      </main>
      <SiteFooter />
    </div>
  )
}
