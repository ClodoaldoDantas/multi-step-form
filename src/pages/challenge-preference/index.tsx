import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'

export default function ChallengePreference() {
  return (
    <Card>
      <Card.Header>
        <MultiStep currentStep={3} />
      </Card.Header>

      <Card.Body>
        <h2 className="step-title">Challenge Preference</h2>
        <p className="step-description">
          Please tell us which frontend challenges you would like to participate
          in.
        </p>
      </Card.Body>

      <Card.Footer>
        <Button variant="secondary">Go Back</Button>

        <Button>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
