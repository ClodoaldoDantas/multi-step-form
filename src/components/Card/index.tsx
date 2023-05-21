import { ReactNode } from 'react'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'
import styles from './styles.module.scss'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
