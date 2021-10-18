import React, {useEffect} from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router, useRouter } from 'next/router';
import { AuthLuth } from '../components/Authentication/AuthLuth';
import {  ThorLhor } from '../components/Authorisation/ThorLhor'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const queryClient = new QueryClient()
  Amplify.configure(awsconfig)

  return (
    <QueryClientProvider client={queryClient}>
      <ThorLhor>
        <AuthLuth>
          <Component {...pageProps} />
        </AuthLuth>
      </ThorLhor>
    </QueryClientProvider>
  )
}
export default MyApp
