import React, {useEffect} from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { Auth } from 'aws-amplify'
import { setAccessToken } from '../Global-Variables/accessToken'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router, useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const queryClient = new QueryClient()
  Amplify.configure(awsconfig)

  const getAccessToken = async () => {
    try {
      const { signInUserSession } = await Auth.currentAuthenticatedUser()
      const jwt =  signInUserSession.accessToken.jwtToken
      console.log(jwt);
      
      setAccessToken(jwt)
    } catch (e) {
      router.push("/")
    }
  }

  useEffect(() => {
    if (router.pathname != '/') {
      getAccessToken()
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
