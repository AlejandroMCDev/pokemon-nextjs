import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  )
}
