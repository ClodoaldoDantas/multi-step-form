import Image from 'next/image'
import checkImg from '@/assets/check.svg'
import styles from '@/styles/Congratulations.module.scss'

export default function Congratulations() {
  return (
    <div className={styles.container}>
      <Image src={checkImg} alt="" />

      <strong className={styles.title}>Congratulations! 🎉</strong>

      <p className={styles.description}>
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
    </div>
  )
}
