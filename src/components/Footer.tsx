const usefulLinks = [
  {
    title: 'Wu-Tang Related',
    links: [
      { name: 'Wu-Tang Clan Official', url: 'https://wutangclan.com' },
      { name: 'Wu-Tang Wikipedia', url: 'https://en.wikipedia.org/wiki/Wu-Tang_Clan' },
      { name: 'Wu-Tang Lyrics', url: 'https://genius.com/artists/Wu-tang-clan' }
    ]
  },
  {
    title: 'Name Generators',
    links: [
      { name: 'Kingdom Name Generator', url: 'https://kingdomnamegenerator.pro/' },
      { name: 'Demon Name Generator', url: 'https://demonnamegenerator.pro/' },
      { name: 'Harry Potter Name Generator', url: 'https://harrypotternamegenerator.pro/' }
    ]
  },
  {
    title: 'Others',
    links: [
      { name: 'Iframe Generator', url: 'https://www.iframegenerator.pro/' },
      { name: 'DDS to PNG', url: 'https://www.ddstopng.pro/' },
      { name: 'WebP to PDF', url: 'https://webptopdf.pro/' },
      { name: 'PDF to Markdown', url: 'https://www.google.com/url?q=https%3A%2F%2Fpdftomarkdown.pro%2F' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {usefulLinks.map((category, index) => (
            <div key={index}>
              <h3 className="text-yellow-500 font-semibold text-lg mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="text-center">
            <p className="text-zinc-400">
              {new Date().getFullYear()} Wu Tang Name Generator. All rights reserved.
            </p>
            <p className="text-zinc-500 mt-2 text-sm">
              This is a fan project and is not affiliated with Wu-Tang Clan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
