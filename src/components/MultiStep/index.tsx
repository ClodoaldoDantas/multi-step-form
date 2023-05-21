import cx from 'classnames'
import styles from './styles.module.scss'

interface MultiStepProps {
  currentStep: number
}

export function MultiStep({ currentStep }: MultiStepProps) {
  return (
    <div className={styles.steps}>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((step) => (
        <div
          className={cx(styles.step, { [styles.active]: currentStep >= step })}
          key={step}
        >
          <div className={styles.stepCircle}>{step}</div>
        </div>
      ))}
    </div>
  )
}
