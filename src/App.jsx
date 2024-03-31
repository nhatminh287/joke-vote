import { useState } from 'react'
import { Navbar, Banner, Content, Footer } from 'src/components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  )
}

export default App
