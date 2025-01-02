import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          The page you&apos;re looking for has vanished into the Wu Tang shadows.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
