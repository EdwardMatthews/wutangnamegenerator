import { FaKeyboard, FaBolt, FaShareAlt } from 'react-icons/fa'

const steps = [
  {
    icon: FaKeyboard,
    title: 'Enter Your Name',
    description: 'Start your Wu-Tang journey by entering your name into our Wu Tang Name Generator. Leave it blank for a random Wu-Tang style name, or input your name for a personalized transformation.',
    highlight: 'Quick Tip: Try different variations of your name to get unique Wu-Tang style results!'
  },
  {
    icon: FaBolt,
    title: 'Generate Your Wu-Tang Name',
    description: 'Click the "Generate" button and watch as our Wu Tang Name Generator instantly creates multiple authentic Wu-Tang style names inspired by legendary members like RZA, GZA, and Method Man.',
    highlight: 'Pro Tip: Generate multiple times to explore different Wu-Tang name combinations!'
  },
  {
    icon: FaShareAlt,
    title: 'Share Your New Identity',
    description: 'Found your perfect Wu-Tang name? Share it instantly on social media, use it for gaming, or show it to your friends. Our Wu Tang Name Generator makes it easy to spread your new hip-hop identity.',
    highlight: 'Bonus: Create names for your entire crew and form your own Wu-Tang inspired collective!'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How Our Wu Tang Name Generator Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="card relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-yellow-500 mb-3">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{step.description}</p>
                    <div className="bg-zinc-800/50 p-4 rounded-lg">
                      <p className="text-yellow-500 text-sm font-medium">
                        {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Ready to discover your Wu-Tang identity? Our Wu Tang Name Generator is free, 
            fast, and fun to use. Join thousands of hip-hop fans who've already found 
            their perfect Wu-Tang style name!
          </p>
        </div>
      </div>
    </section>
  )
}
