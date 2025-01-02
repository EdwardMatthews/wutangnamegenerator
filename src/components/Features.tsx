import { FaBolt, FaRandom, FaHistory, FaShare, FaMagic, FaUserAlt } from 'react-icons/fa'

const features = [
  {
    icon: FaBolt,
    title: 'Instant Wu Tang Name Generation',
    description: 'Our Wu Tang Name Generator creates your unique Wu-Tang Clan style name instantly. No waiting, just instant hip-hop inspiration!'
  },
  {
    icon: FaMagic,
    title: 'Authentic Wu-Tang Style',
    description: 'Our Wu Tang Name Generator Generate names inspired by legendary Wu-Tang Clan members like RZA, GZA, and Method Man. Each name captures the essence of Wu-Tang culture.'
  },
  {
    icon: FaRandom,
    title: 'Multiple Name Options',
    description: 'Get 10 unique Wu-Tang style names with each click. Our Wu Tang Name Generator ensures each name is original and memorable.'
  },
  {
    icon: FaUserAlt,
    title: 'Personalized Names',
    description: 'Our Wu Tang Name Generator creates names that reflect your personality while maintaining the iconic Wu-Tang Clan style.'
  },
  {
    icon: FaShare,
    title: 'Easy Sharing',
    description: 'Share your Wu-Tang name instantly on social media. Show off your new hip-hop identity to friends and fellow fans.'
  },
  {
    icon: FaHistory,
    title: 'Always Free',
    description: 'Our Wu Tang Name Generator is completely free to use. Generate as many names as you want, whenever you want!'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Our Wu Tang Name Generator?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:bg-zinc-800/70 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Join thousands of hip-hop fans who use our Wu Tang Name Generator to create 
            their unique Wu-Tang Clan style names. Perfect for social media, gaming, 
            or showing your love for Wu-Tang culture!
          </p>
        </div>
      </div>
    </section>
  )
}
