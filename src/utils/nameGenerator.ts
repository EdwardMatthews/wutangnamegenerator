// Concrete nouns (martial arts, weapons, roles)
const concreteNouns = [
  'Crane', 'Fist', 'Dragon', 'Tiger', 'Sword', 'Blade', 'Assassin',
  'Warrior', 'Monk', 'Ninja', 'Master', 'Prophet', 'Ghost', 'Phantom',
  'Snake', 'Eagle', 'Lion', 'Wolf', 'Cobra', 'Viper', 'Hunter',
  'Killer', 'Beast', 'Destroyer', 'Champion', 'Knight', 'Rebel',
  'Panther', 'Scorpion', 'Phoenix', 'Raven', 'Mantis', 'Spider'
]

// Descriptive adjectives (personality, state, attitude)
const descriptiveAdjectives = [
  'Aggressive', 'Sympathetic', 'Drunken', 'Philosophical', 'Tough',
  'Mysterious', 'Silent', 'Swift', 'Deadly', 'Wise', 'Ancient',
  'Savage', 'Noble', 'Wild', 'Fierce', 'Cunning', 'Righteous',
  'Eternal', 'Divine', 'Sacred', 'Cosmic', 'Mystic', 'Professional',
  'Chaotic', 'Peaceful', 'Furious', 'Vengeful', 'Merciful', 'Humble',
  'Arrogant', 'Graceful', 'Ruthless', 'Honorable', 'Fearless'
]

// Style modifiers (optional third element)
const styleModifiers = [
  'Style', 'Method', 'Flow', 'Technique', 'Way', 'Path', 'Spirit',
  'Mind', 'Soul', 'Force', 'Power', 'Energy', 'Essence', 'Form'
]

/**
 * Generates a name based on user input
 * @param input User's input name (optional)
 * @returns Generated Wu-Tang style name
 */
function generateName(input?: string): string {
  // Base pattern: Concrete Noun + Descriptive Adjective
  let noun = concreteNouns[Math.floor(Math.random() * concreteNouns.length)]
  let adjective = descriptiveAdjectives[Math.floor(Math.random() * descriptiveAdjectives.length)]

  if (input) {
    // Use input to influence name generation
    const inputLower = input.toLowerCase()
    
    // Try to match first letter or sound
    const matchingNouns = concreteNouns.filter(n => 
      n.toLowerCase().startsWith(inputLower.charAt(0)) ||
      Math.random() < 0.3
    )
    if (matchingNouns.length > 0) {
      noun = matchingNouns[Math.floor(Math.random() * matchingNouns.length)]
    }

    // Use input length to influence adjective selection
    const inputLength = input.length
    const matchingAdjectives = descriptiveAdjectives.filter(adj => 
      Math.abs(adj.length - inputLength) <= 3 ||
      Math.random() < 0.3
    )
    if (matchingAdjectives.length > 0) {
      adjective = matchingAdjectives[Math.floor(Math.random() * matchingAdjectives.length)]
    }
  }

  // 20% chance to add a style modifier
  if (Math.random() < 0.2) {
    const modifier = styleModifiers[Math.floor(Math.random() * styleModifiers.length)]
    return `${noun} ${adjective} ${modifier}`
  }

  // 80% chance for simple two-word name
  return `${noun} ${adjective}`
}

/**
 * Generates multiple Wu-Tang style names
 * @param count Number of names to generate
 * @param input User's input name (optional)
 * @returns Array of generated names
 */
export function generateNames(count: number, input?: string): string[] {
  const names = new Set<string>()
  
  // Generate names until we have the requested count of unique names
  while (names.size < count) {
    names.add(generateName(input))
  }
  
  return Array.from(names)
}

// Export for use in components
export default generateNames
