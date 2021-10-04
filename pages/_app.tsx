import React, {useEffect} from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { Auth } from 'aws-amplify'
import { setAccessToken } from '../Global-Variables/accessToken'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  Amplify.configure(awsconfig)

  const getAccessToken = async () => {
    try{
      const { signInUserSession } = await Auth.currentAuthenticatedUser()
      const jwt =  signInUserSession.accessToken.jwtToken
      setAccessToken(jwt)
    }catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
      getAccessToken()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
