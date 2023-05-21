import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'

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
      </Card.Body>

      <Card.Footer>card footer</Card.Footer>
    </Card>
  )
}
