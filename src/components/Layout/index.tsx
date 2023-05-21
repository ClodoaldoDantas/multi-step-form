import { Poppins, Merriweather } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '../Header'
import styles from './styles.module.scss'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-heading',
})

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={`${poppins.className} ${merriweather.variable}`}>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </main>
  )
}
