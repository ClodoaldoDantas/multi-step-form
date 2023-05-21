import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'

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

      <Card.Footer>card footer</Card.Footer>
    </Card>
  )
}
