import React, { useState, useEffect } from 'react'
import EarthIntro from './components/EarthIntro'
import ServicesHub from './components/ServicesHub'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [tg] = useState(window.Telegram?.WebApp)

  useEffect(() => {
    if (tg) {
      tg.ready()
      tg.expand()
      tg.setHeaderColor('#000000')
      tg.setBackgroundColor('#000000')
    }

    // Intro длится 5 секунд
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [tg])

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      {showIntro ? (
        <EarthIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <ServicesHub tg={tg} />
      )}
    </div>
  )
}

export default App
