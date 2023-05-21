import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'

export default function SkillLevel() {
  return (
    <Card>
      <Card.Header>
        <MultiStep currentStep={2} />
      </Card.Header>

      <Card.Body>
        <h2 className="step-title">Skill Level</h2>
        <p className="step-description">
          Please tell us about your skill level in frontend development.
        </p>
      </Card.Body>

      <Card.Footer>
        <Button variant="secondary">Go Back</Button>

        <Button>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
