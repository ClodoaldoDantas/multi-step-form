import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface CardHeaderProps {
  className?: string
  children: ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <header className={cx(styles.cardHeader, className)}>{children}</header>
  )
}
