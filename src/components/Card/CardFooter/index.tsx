import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface CardFooterProps {
  justify?: 'flex-end' | 'space-between'
  children: ReactNode
}

export function CardFooter({
  children,
  justify = 'space-between',
}: CardFooterProps) {
  return (
    <footer style={{ justifyContent: justify }} className={styles.cardFooter}>
      {children}
    </footer>
  )
}
