import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Nav />

    <h1>Pagina web en desarrollo" 💻🚀✨</h1>
   </div>
  )
}
