import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface CardBodyProps {
  className?: string
  children: ReactNode
}

export function CardBody({ className, children }: CardBodyProps) {
  return <div className={cx(styles.cardBody, className)}>{children}</div>
}
