import { useState } from 'react'
import { useRouter } from 'next/router'
import { Compass, Leaf, Rocket, Trophy } from 'lucide-react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { LevelButton } from '@/components/LevelButton'
import { MultiStep } from '@/components/MultiStep'
import { BackButton } from '@/components/BackButton'

const levels = {
  beginner: Leaf,
  intermediate: Compass,
  advanced: Rocket,
  expert: Trophy,
}

type Level = keyof typeof levels

export default function SkillLevel() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null)
  const [touched, setTouched] = useState(false)

  const router = useRouter()

  function handleSelect(level: Level) {
    if (level === selectedLevel) {
      setSelectedLevel(null)
      return
    }

    setSelectedLevel(level)
  }

  function handleRegisterLevel() {
    setTouched(true)

    if (selectedLevel) {
      /* TODO: save skill level in store */
      console.log('level', selectedLevel)
      router.push('/challenge-preference')
    }
  }

  const isError = touched && !selectedLevel

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

        {isError && <span className="error">Please, choose a skill level</span>}

        <div className="grid-two-columns">
          {Object.entries(levels).map(([level, icon]) => (
            <LevelButton
              key={level}
              title={level}
              icon={icon}
              active={level === selectedLevel}
              onSelect={() => handleSelect(level as Level)}
            />
          ))}
        </div>
      </Card.Body>

      <Card.Footer>
        <BackButton />
        <Button onClick={handleRegisterLevel}>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
