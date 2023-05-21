import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from '@/styles/Home.module.scss'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const personalFormSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().nonempty('Phone is required'),
  link: z.string().nonempty('Link is required'),
})

type PersonalFormData = z.infer<typeof personalFormSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({
    resolver: zodResolver(personalFormSchema),
  })

  const router = useRouter()

  async function handleRegister(data: PersonalFormData) {
    /* TODO: save data in store */
    console.log(data)

    router.push('/skill-level')
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Card>
        <Card.Header>
          <MultiStep currentStep={1} />
        </Card.Header>

        <Card.Body>
          <h2 className="step-title">Personal Information</h2>
          <p className="step-description">
            Please provide your personal details so we can get to know you
            better.
          </p>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">
                Full Name
              </label>

              <input
                className={styles.formField}
                type="text"
                id="name"
                placeholder="John Doe"
                {...register('name')}
              />

              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email Address
              </label>

              <input
                className={styles.formField}
                type="text"
                id="email"
                placeholder="name@email.com"
                {...register('email')}
              />

              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="phone">
                Phone Number
              </label>

              <input
                className={styles.formField}
                type="text"
                id="phone"
                placeholder="+91 1234567890"
                {...register('phone')}
              />

              {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="link">
                Portfolio/GitHub Link
              </label>

              <input
                className={styles.formField}
                type="text"
                id="link"
                placeholder="github.com/rishipurwar1"
                {...register('link')}
              />

              {errors.link && (
                <span className={styles.error}>{errors.link.message}</span>
              )}
            </div>
          </div>
        </Card.Body>

        <Card.Footer justify="flex-end">
          <Button type="submit">Next Step</Button>
        </Card.Footer>
      </Card>
    </form>
  )
}
