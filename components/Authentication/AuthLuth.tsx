import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export {AuthLuth}

interface props {
    children: any
}

const AuthLuth = (props: props) => {
    const router = useRouter()

    const unauthenticated = ['/', '/login', '/admin-login', '/employee-login']

    const commonPath = ['/settings']
    
    useEffect(() => {
        const pathname = router.pathname

        Auth.currentAuthenticatedUser().then( user => {
            const group = user.signInUserSession.accessToken.payload["cognito:groups"]
            console.log(user.signInUser.accessToken.jwtToken);
            console.log(user);
            
            
            redirectAwayAuthenticated(pathname, group)
            return 
        }).catch( () => {            
            redirectAwayUnauthenticated(pathname)
        })

    }, [])

    const redirectAwayAuthenticated = ( pathname:string, group:string[] ) => {
        if (commonPath.includes(pathname)) {
            return 
        }
        if (!group.includes('ROLE_EMPLOYER') && unauthenticated.includes(pathname)) {
            router.push('/user/dashboard')
        }
        else if (unauthenticated.includes(pathname)) {
            router.push('/dashboard')
        }
    }

    const redirectAwayUnauthenticated = ( pathname: string) => {
        console.log(pathname);
        
        if (!unauthenticated.includes(pathname)) {
            router.push('/')
        }
    }

    return (
        props.children
    )
}