import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Components/Header';
import * as gtag from '../lib/gtag'

const ContactWrapper = styled.div`
    width: 100%;
    height: 85vh;
    background: ${props => props.theme.primary};
    display: flex;
`

const ContactSection = styled.section`
    width: 70%;
    margin: auto auto;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.primary};
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 425px){
        width: 90%;
        font-size: 1.25em;
        p{
            margin-top: 50px;
            font-size: 0.8em;
        }
    }

    @media only screen and (min-width: 425px) and (max-width: 768px){
        width: 80%;
        font-size: 1.75em;
    }
`
const Title = styled.h1`
    font-size: 1em;

    @media only screen and (min-width: 2560px) {
        font-size: 2em;
    }
`

const ContactIcons = styled.div`
    padding: 10px;
    font-size: 3em; 
    text-decoration: none;

    i{
        margin: 40px;
    }

    i:hover{
        color: ${props => props.theme.textColorSecondary};
    }

    @media only screen and (max-width: 425px){
        text-align: center;
        font-size: 4em;
        i{
            margin: 25px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
        i{
            margin: 20px;
        }
    }

    @media only screen and (min-width: 2560px) {
        font-size: 6em;
    }
`

const Contact = () => {


    const openContact = (label) =>{
        gtag.event({
            action: 'hide-navbar',
            category: 'Navbar',
            label: label,
        })
    }

    return (
        <>
            <Head>
                <title>Alan Salinas - Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
            </Head>
            <Header />
            <ContactWrapper>
                <ContactSection>
                    <Title>Don't be hesitate to write to me. 😊</Title>
                    <ContactIcons>
                        <a
                            href="https://github.com/SalinasAlan"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => openContact("github")}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/alansalinas2"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => openContact("twitter")}
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alan-salinas-de-los-santos-53b3747a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => openContact("linkedin")}
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/alansdls.codes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => openContact("instagram")}
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </ContactIcons>
                </ContactSection>
            </ContactWrapper>
        </>
    );
}

export default Contact;