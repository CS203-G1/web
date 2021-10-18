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

    
    return (
        props.children
    )
}