import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  Amplify.configure(awsconfig)

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
