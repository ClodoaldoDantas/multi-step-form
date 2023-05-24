import { useState } from 'react'
import { useRouter } from 'next/router'
import { collection, addDoc } from 'firebase/firestore'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MultiStep } from '@/components/MultiStep'
import { BackButton } from '@/components/BackButton'
import { InfoCard } from '@/components/InfoCard'

import { useStore } from '@/store'
import { getChallengesLabels } from '@/utils/challenges'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'
import { db } from '@/lib/firebase'

export default function Review() {
  const { personal, level, preferences } = useStore()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSaveData() {
    setIsLoading(true)

    try {
      await addDoc(collection(db, 'developers'), {
        personal,
        level,
        preferences,
      })

      router.push('/congratulations')
    } catch (err) {
      console.log('Something went wrong', err)
    } finally {
      setIsLoading(false)
    }
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

        {isLoading ? (
          <Button disabled>Sending data</Button>
        ) : (
          <Button disabled={buttonIsDisabled} onClick={handleSaveData}>
            Next Step
          </Button>
        )}
      </Card.Footer>
    </Card>
  )
}
