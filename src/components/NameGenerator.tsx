'use client'

import { useState } from 'react'
import generateNames from '@/utils/nameGenerator'
import { FaRedo, FaRandom } from 'react-icons/fa'

interface NameGeneratorProps {
  initialNames: string[]
}

export default function NameGenerator({ initialNames }: NameGeneratorProps) {
  const [names, setNames] = useState<string[]>(initialNames)
  const [inputName, setInputName] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Small delay to show loading state
    setTimeout(() => {
      setNames(generateNames(10, inputName.trim()))
      setIsGenerating(false)
    }, 300)
  }

  const handleRandomGenerate = () => {
    setIsGenerating(true)
    setInputName('')
    setTimeout(() => {
      setNames(generateNames(10))
      setIsGenerating(false)
    }, 300)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        {/* Input Section */}
        <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <label htmlFor="userName" className="block text-zinc-400 mb-2">
              Enter Your Name
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Type your name for a personalized Wu-Tang name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg 
                       text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500
                       transition-colors"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <FaRedo className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Generating...' : 'Generate Wu-Tang Name'}
            </button>
            <button
              onClick={handleRandomGenerate}
              disabled={isGenerating}
              className="btn-secondary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <FaRandom className="w-4 h-4" />
              Random Name
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid gap-4">
          {names.map((name, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 
                       hover:border-yellow-500/50 transition-colors
                       animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-xl text-center text-yellow-500 font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
