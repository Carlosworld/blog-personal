import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Nav />

    <h1>Hola Esta sera mi primer blog personal en next js</h1>
   </div>
  )
}
