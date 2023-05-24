export const challenges = [
  { id: 'html-css-js', label: 'HTML/CSS/JS' },
  { id: 'react', label: 'React.Js' },
  { id: 'angular', label: 'Angular.Js' },
  { id: 'vue', label: 'Vue.Js' },
]

export function getChallengesLabels(challengeIds: string[]) {
  const labels = challengeIds.map((id) => {
    const challenge = challenges.find((item) => item.id === id)
    return challenge!.label
  })

  return labels.length > 0 ? labels.join(',') : '-'
}
