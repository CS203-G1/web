import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export {ThorLhor}

interface props {
    children: any
}

const ThorLhor = (props: props) => {
    const router = useRouter()
    const pathname = router.pathname

    useEffect(() => {
        Auth.currentAuthenticatedUser().then( user => {
            const group = user.signInUserSession.accessToken.payload["cognito:groups"]
            if (!group.includes('ROLE_EMPLOYER')) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                redirectNotAdmin()
            }
        })
    }, [])

    const redirectNotAdmin = () => {
        if (pathname.substring(0, 5) !="/user" || pathname != "/settings" ) {
            router.push("/")
        }
    }

    return (
        props.children
    )
}