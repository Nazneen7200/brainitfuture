import { useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import CountdownTimer from './components/CountdownTimer'
import CursorGlow from './components/CursorGlow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NotifyModal from './components/NotifyModal'
import Preloader from './components/Preloader'
import Services from './components/Services'

function App() {
  const [notifyOpen, setNotifyOpen] = useState(false)

  return (
    <>
      <Preloader />
      <AnimatedBackground />
      <CursorGlow />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero onNotifyClick={() => setNotifyOpen(true)} />
          <CountdownTimer />
          <Services />
        </main>
        <Footer />
      </div>

      <NotifyModal open={notifyOpen} onClose={() => setNotifyOpen(false)} />
    </>
  )
}

export default App
