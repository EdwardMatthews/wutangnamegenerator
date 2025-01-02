import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Wu Tang Name Generator'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #18181b, #000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: '#f59e0b',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Wu Tang Name Generator
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#71717a',
            textAlign: 'center',
          }}
        >
          Generate your unique Wu Tang Clan name with style
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
