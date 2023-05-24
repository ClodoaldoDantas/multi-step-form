import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import styles from './styles.module.scss'

interface CheckboxProps {
  id: string
  label: string
  checked: RadixCheckbox.CheckedState
  onChange: (checked: boolean, value: string) => void
}

export function Checkbox({ id, label, checked, onChange }: CheckboxProps) {
  return (
    <div className={styles.checkboxContainer}>
      <RadixCheckbox.Root
        id={id}
        value={id}
        className={styles.checkboxRoot}
        checked={checked}
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
