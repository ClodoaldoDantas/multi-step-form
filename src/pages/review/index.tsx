import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'
import { BackButton } from '@/components/BackButton'
import { InfoCard } from '@/components/InfoCard'

export default function Review() {
  function handleSaveData() {
    /* TODO: send data to api  */
  }

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

        <div className="grid-three-columns">
          <InfoCard title="Full Name" content="Rishi Purwar" />
          <InfoCard title="Email Address" content="name@email.com" />
          <InfoCard title="Phone Number" content="+91 1234567890" />
          <InfoCard
            title="Portfolio/GitHub Link"
            content="github.com/rishipurwar1"
          />
          <InfoCard title="Skill Level" content="Intermediate" />
          <InfoCard title="Challenge Preference" content="React.Js" />
        </div>
      </Card.Body>

      <Card.Footer>
        <BackButton />
        <Button onClick={handleSaveData}>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
