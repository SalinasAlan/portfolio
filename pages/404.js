import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const ErrorPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColor};

    @media only screen and (min-width: 2560px) {
        font-size: 4em;
    }
`
const Title = styled.h1`
    margin: 0;
`
const Item = styled.a`
    cursor: pointer;
    color: aquamarine;

    & :hover{
        color: coral;
    }
`;

const ErrorPage = () => {
    return (
        <>
            <Head>
                <title>Error404 😥</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
            </Head>
            <ErrorPageWrapper>
                <Title>This page does not exist 😥</Title>
                <Link href="/">
                    <Item>Return to my portfolio 😁🤙</Item>
                </Link>
            </ErrorPageWrapper>
        </>
    )
}

export default ErrorPage;