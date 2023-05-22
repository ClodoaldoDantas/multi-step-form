import styles from './styles.module.scss'

interface InfoCardProps {
  title: string
  content: string
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className={styles.infoCard}>
      <span>{title}</span>
      <strong title={content}>{content}</strong>
    </div>
  )
}
