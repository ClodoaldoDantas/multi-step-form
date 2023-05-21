import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface CardFooterProps {
  className?: string
  children: ReactNode
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <footer className={cx(styles.cardFooter, className)}>{children}</footer>
  )
}
