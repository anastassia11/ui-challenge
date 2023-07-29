import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono } from 'next/font/google'
import { useState, useEffect } from 'react'

const ibmFont = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" })

interface ThemeProvider {
  children: React.ReactNode
}

const LoadingThemeProvider = ({ children }: ThemeProvider) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingThemeProvider>
      <main className={ibmFont.className}>
        <Component {...pageProps} />
      </main>
    </LoadingThemeProvider>
  )
}
