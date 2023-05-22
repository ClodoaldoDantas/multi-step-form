import { useRouter } from 'next/router'
import { Button } from '../Button'

export function BackButton() {
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <Button onClick={handleBack} variant="secondary">
      Go Back
    </Button>
  )
}
