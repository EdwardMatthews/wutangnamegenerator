const faqs = [
  {
    question: 'What is the Wu Tang Name Generator?',
    answer: 'The Wu Tang Name Generator is a free online tool that creates unique names inspired by the legendary Wu-Tang Clan members. It generates authentic hip-hop style names that capture the essence of Wu-Tang culture, perfect for fans, gamers, and anyone looking for a cool alias.'
  },
  {
    question: 'How does the Wu Tang Name Generator work?',
    answer: 'Our Wu Tang Name Generator uses advanced algorithms to create authentic Wu-Tang style names. It combines elements from martial arts, hip-hop culture, and the iconic style of Wu-Tang Clan members like RZA, GZA, and Method Man to generate unique names that match the Wu-Tang aesthetic.'
  },
  {
    question: 'Is this Wu Tang Name Generator really free?',
    answer: 'Yes! Our Wu Tang Name Generator is completely free to use. You can generate as many Wu-Tang style names as you want, anytime you want, with no hidden costs or limitations. Perfect for creating multiple names until you find your ideal Wu-Tang identity.'
  },
  {
    question: 'Can I use my generated Wu-Tang name on social media?',
    answer: 'Absolutely! The names created by our Wu Tang Name Generator are perfect for social media profiles, gaming usernames, or any online presence. Feel free to use your generated name anywhere you want to show your Wu-Tang spirit.'
  },
  {
    question: 'What makes a good Wu-Tang style name?',
    answer: 'A great Wu-Tang style name combines uniqueness, cultural relevance, and memorable elements. Our Wu Tang Name Generator creates names that reflect the Wu-Tang Clan\'s style, incorporating martial arts references, street wisdom, and hip-hop elements that made the original members\' names so iconic.'
  },
  {
    question: 'How many names can I generate?',
    answer: 'With our Wu Tang Name Generator, you can generate unlimited names! Each click gives you 10 unique Wu-Tang style names to choose from. Generate as many times as you want until you find the perfect name that resonates with your style.'
  },
  {
    question: 'Are the generated names unique?',
    answer: 'Yes! Our Wu Tang Name Generator uses a vast database and sophisticated algorithms to create unique combinations. While inspired by the Wu-Tang Clan\'s naming style, each generated name is original and helps you stand out in the Wu-Tang universe.'
  },
  {
    question: 'Can I use the Wu Tang Name Generator for my friends?',
    answer: 'Of course! The Wu Tang Name Generator is perfect for groups of friends. Generate Wu-Tang style names for your entire crew and create your own Wu-Tang inspired collective. It\'s a fun way to connect with friends who share your love for hip-hop culture.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">{faq.question}</h3>
              <p className="text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Still have questions about our Wu Tang Name Generator? 
            Generate your Wu-Tang style name now and join thousands of satisfied users 
            who've discovered their unique Wu-Tang identity!
          </p>
        </div>
      </div>
    </section>
  )
}
