import React from 'react'
import Header from '../Layout/Header/Header'




const Layout = (props) => {
    return (
        <>
            <Header />

                {props.children}

        </>
    )
}

export default Layout

