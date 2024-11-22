import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <SpeedInsights/>
    </ThemeProvider>
  );
}
