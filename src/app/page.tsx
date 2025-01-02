import { generateNames } from '@/utils/nameGenerator'
import NameGenerator from '@/components/NameGenerator'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'

export default function Home() {
  // Generate initial names on the server
  const initialNames = generateNames(10)

  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-yellow-500">
          Wu Tang Name Generator
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-12">
          Enter the realm of Wu Tang Clan and discover your legendary name.
          Our Wu Tang Name Generator creates authentic Wu Tang style names that embody
          the spirit of hip-hop culture.
        </p>
        
        {/* Name Generator Component */}
        <NameGenerator initialNames={initialNames} />
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQ />
    </main>
  )
}
