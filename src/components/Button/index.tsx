import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]}`} {...rest} />
}
