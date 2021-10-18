import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export {AuthLuth}

interface props {
    children: any
}

const AuthLuth = (props: props) => {
    const router = useRouter()

    const unauthenticated = ['/', '/admin-login', '/employee-login']
    
    useEffect(() => {
        const pathname = router.pathname

        Auth.currentAuthenticatedUser().then( user => {
            console.log(user);
            
            redirectAwayAuthenticated(pathname)
            return 
        }).catch( err => {
            redirectAwayUnauthenticated(pathname)
        })

    }, [])

    const redirectAwayAuthenticated = ( pathname:string ) => {
        if (unauthenticated.includes(pathname)) {
            router.push('/dashboard')
        }
    }

    const redirectAwayUnauthenticated = ( pathname: string) => {
        if (!unauthenticated.includes(pathname)) {
            router.push('/')
        }
    }

    return (
        props.children
    )
}