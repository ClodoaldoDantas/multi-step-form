import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Join our Community of Developers</h1>
      <p className={styles.description}>
        To join our community and participate in frontend challenges. Please
        fill out the following form.
      </p>
    </header>
  )
}
