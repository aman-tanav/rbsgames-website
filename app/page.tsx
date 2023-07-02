import Image from 'next/image'
import './globals.css'



import GameDevelopment from '../pages/Gamedevelopment'
import AppDevelopment from '../pages/Gamedevelopment'
import About from '../pages/about'
import Home from '../pages/App-Home'




export default function Homes() {
  return (
    <main >
      <GameDevelopment/>
      <About/>
      <Home />
      <AppDevelopment/>
      
    </main>
  )
}
