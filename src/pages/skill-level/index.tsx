import { useState } from 'react'
import { useRouter } from 'next/router'
import { Compass, Leaf, Rocket, Trophy } from 'lucide-react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { LevelButton } from '@/components/LevelButton'
import { MultiStep } from '@/components/MultiStep'

import styles from '@/styles/Skill.module.scss'

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

  function handleBack() {
    router.push('/')
  }

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

        <div className={styles.grid}>
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
        <Button onClick={handleBack} variant="secondary">
          Go Back
        </Button>

        <Button onClick={handleRegisterLevel}>Next Step</Button>
      </Card.Footer>
    </Card>
  )
}
