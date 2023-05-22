import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'
import { BackButton } from '@/components/BackButton'

export default function Review() {
  return (
    <Card>
      <Card.Header>
        <MultiStep currentStep={4} />
      </Card.Header>

      <Card.Body>
        <h2 className="step-title">Review and Confirm</h2>
        <p className="step-description">
          Please review your information to make sure everything is accurate.
        </p>
      </Card.Body>

      <Card.Footer>
        <BackButton />
        <Button>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
