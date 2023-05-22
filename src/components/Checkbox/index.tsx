import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import styles from './styles.module.scss'

interface CheckboxProps {
  id: string
  label: string
  onChange: (checked: boolean, value: string) => void
}

export function Checkbox({ id, label, onChange }: CheckboxProps) {
  return (
    <div className={styles.checkboxContainer}>
      <RadixCheckbox.Root
        id={id}
        value={id}
        className={styles.checkboxRoot}
        onCheckedChange={(checked) => {
          onChange(checked === true, id)
        }}
      >
        <RadixCheckbox.Indicator className={styles.checkboxIndicator}>
          <Check size={16} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  )
}
