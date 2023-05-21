import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <Card>
      <Card.Header>
        <MultiStep currentStep={1} />
      </Card.Header>

      <Card.Body>
        <h2 className="step-title">Personal Information</h2>
        <p className="step-description">
          Please provide your personal details so we can get to know you better.
        </p>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">
              Full Name
            </label>

            <input
              className={styles.formField}
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              Email Address
            </label>

            <input
              className={styles.formField}
              type="text"
              name="email"
              id="email"
              placeholder="name@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="phone">
              Phone Number
            </label>

            <input
              className={styles.formField}
              type="text"
              name="phone"
              id="phone"
              placeholder="+91 1234567890"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="github">
              Portfolio/GitHub Link
            </label>

            <input
              className={styles.formField}
              type="text"
              name="github"
              id="github"
              placeholder="github.com/rishipurwar1"
            />
          </div>
        </div>
      </Card.Body>

      <Card.Footer justify="flex-end">
        <Button>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
