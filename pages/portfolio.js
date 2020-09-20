import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Components/Header';
import Image from '../Components/Image'

const PortfolioWrapper = styled.div`
    margin: 0;
    background: ${props => props.theme.primary};
`
const PortfolioSection = styled.section`
    width: 80vw;
    margin: auto auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    
    @media only screen and (max-width: 425px){
        line-height: 1.8;
        justify-content: center;        
    }
`;

const Title = styled.h1`
    margin: 0;
    justify-content: center;
    color: ${props => props.theme.textColor};

    @media only screen and (max-width: 425px){
        font-size: 1.5em;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 4em;
    }
`;

const Proyects = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    /* justify-content: center; */
    flex-wrap: wrap;

    img {
        align-self: center;
        max-width: 95%;
    }

    @media only screen and (max-width: 425px){
        display: block; 
        text-align: center;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3em;
    }
`

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Alan Salinas - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
            </Head>
            <Header />
            <PortfolioWrapper>
                <PortfolioSection>
                    <Title>My personal projects</Title>
                    <Proyects>
                        <Image
                            src="/salinasalan.github.io_WeatherApp_.png"
                            alt="temperature"
                            desc="Javascript and API weather."
                            webSite="https://salinasalan.github.io/WeatherApp/"
                            github="https://github.com/SalinasAlan/WeatherApp"
                        />
                        <Image
                            src="_D__Lap_Desarrollo_Books_index.html.png"
                            alt="Books"
                            desc="HTML, CSS, JS and Bootstrap 4."
                            webSite="https://salinasalan.github.io/Books/"
                            github="https://github.com/SalinasAlan/Books"
                        />
                        <Image
                            src="_D__Lap_Desktop_Curso_Gl_index.html.png"
                            alt="GDLWebCamp"
                            desc="HTML, CSS, JS, Bootstrap, JQuery and API of Maps"
                            webSite="https://salinasalan.github.io/gdlWebCamp/"
                            github="https://github.com/SalinasAlan/gdlWebCamp"
                        />
                        <Image
                            src="bookapp-fullstack.herokuapp.com_.png"
                            alt="BookApp"
                            desc="Webpack, bootstrap4, node, Mongo, Heroku and Mongodb Atlas"
                            webSite="http://bookapp-fullstack.herokuapp.com/"
                            github="https://github.com/SalinasAlan/BookCards"
                        />
                        <Image
                            src="salinasalan.github.io_Bootstrap4_.png"
                            alt="BookApp"
                            desc="HTML, CSS and bootstrap 4"
                            webSite="https://salinasalan.github.io/Bootstrap4/"
                            github="https://github.com/SalinasAlan/BookCards"
                        />
                        <Image
                            src="Transitions-GoogleChrome2019-10.gif"
                            alt="Transitions"
                            desc="HTML, CSS, JS, Parcel, Gsap."
                            webSite="none"
                            github="https://github.com/SalinasAlan/Transitions"
                        />
                    </Proyects>
                </PortfolioSection>
            </PortfolioWrapper>
        </>
    );
}

export default Portfolio;