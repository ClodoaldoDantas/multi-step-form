import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'
import { BackButton } from '@/components/BackButton'
import { InfoCard } from '@/components/InfoCard'
import { useStore } from '@/store'
import { getChallengesLabels } from '@/utils/challenges'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

export default function Review() {
  const { personal, level, preferences } = useStore()

  function handleSaveData() {
    /* TODO: send data to api  */
    console.log({ personal, level, preferences })
  }

  const formattedLevel = level ? capitalizeFirstLetter(level) : '-'
  const formattedPreferences = getChallengesLabels(preferences)

  const buttonIsDisabled = !personal || !level || preferences.length === 0

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
          <InfoCard title="Full Name" content={personal?.name ?? '-'} />
          <InfoCard title="Email Address" content={personal?.email ?? '-'} />
          <InfoCard title="Phone Number" content={personal?.phone ?? '-'} />

          <InfoCard
            title="Portfolio/GitHub Link"
            content={personal?.link ?? '-'}
          />

          <InfoCard title="Skill Level" content={formattedLevel} />

          <InfoCard
            title="Challenge Preference"
            content={formattedPreferences}
          />
        </div>
      </Card.Body>

      <Card.Footer>
        <BackButton />
        <Button disabled={buttonIsDisabled} onClick={handleSaveData}>
          Next Step
        </Button>
      </Card.Footer>
    </Card>
  )
}
