import { LucideIcon } from 'lucide-react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface LevelButtonProps {
  title: string
  icon: LucideIcon
  active: boolean
  onSelect: () => void
}

export function LevelButton({
  title,
  active,
  icon: Icon,
  onSelect,
}: LevelButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.levelButton, { [styles.active]: active })}
      onClick={onSelect}
    >
      <div className={styles.levelButtonIconWrapper}>
        <Icon className={styles.levelButtonIcon} size={20} />
      </div>

      <span className={styles.levelButtonTitle}>{title}</span>
    </button>
  )
}
