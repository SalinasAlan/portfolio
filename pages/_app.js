import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
    // primary: "#293241",
    primary: "#1F1F1F",
    secundary: "#2F3E46",
    textColor: "#F2F4F4",
    // textColor: "#E0FBFC",
    textColorSecondary: "#EE6C4D"
}

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
