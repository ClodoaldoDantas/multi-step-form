import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Checkbox } from '@/components/Checkbox'
import { MultiStep } from '@/components/MultiStep'
import { useRouter } from 'next/router'
import { useState } from 'react'

const challenges = [
  { id: 'html-css-js', label: 'HTML/CSS/JS' },
  { id: 'react', label: 'React.Js' },
  { id: 'angular', label: 'Angular.Js' },
  { id: 'vue', label: 'Vue.Js' },
]

export default function ChallengePreference() {
  const router = useRouter()
  const [challengesPreferences, setChallengesPreferences] = useState<string[]>(
    []
  )

  const [touched, setTouched] = useState(false)

  function handleBack() {
    router.push('/skill-level')
  }

  function handleChange(checked: boolean, value: string) {
    if (checked) {
      setChallengesPreferences((state) => {
        return [...state, value]
      })
    } else {
      setChallengesPreferences((state) => {
        return state.filter((challenge) => challenge !== value)
      })
    }
  }

  function handleRegisterPreferences() {
    setTouched(true)

    if (challengesPreferences.length > 0) {
      /* TODO: set preferences in store */
      console.log('challenges preferences', challengesPreferences)
      router.push('/review')
    }
  }

  const isError = touched && challengesPreferences.length === 0

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

        {isError && (
          <span className="error">Please, select at least one preference</span>
        )}

        <div className="grid-two-columns">
          {challenges.map((challenge) => (
            <Checkbox
              key={challenge.id}
              id={challenge.id}
              label={challenge.label}
              onChange={handleChange}
            />
          ))}
        </div>
      </Card.Body>

      <Card.Footer>
        <Button onClick={handleBack} variant="secondary">
          Go Back
        </Button>

        <Button onClick={handleRegisterPreferences}>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
