import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Components/Header'
import Image from 'next/image'

const AboutWrapper = styled.div`
    margin: 0;
    padding-top: 50px;
    background: ${props => props.theme.primary};
`

const AboutSection = styled.section`
    width: 70%;
    margin: auto auto;
    font-size: 1.2em;
    color: ${props => props.theme.textColor};

    span {
        font-weight: bold;
    }

    p{
        margin-top: 0;
    }

    a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        font-weight: bold;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3em;
    }
`;

const Heading = styled.h1`
    margin-top: 100px;
`;

const Certifications = styled.div`
    margin: auto auto;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;

    @media only screen and (max-width: 767px){
        width: 100%;
        display: block;
    }
`

const StyledImage = styled(Image)`
    padding: 0;
    margin-bottom: 30px;
`;

const About = () => {
    return (
        <>
            <Head>
				<title>Alan Salinas - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
			</Head>
            <Header />
            <AboutWrapper>
                <AboutSection>
                    <p>
                        <span>Hi,</span> I’m Alan Salinas
                        <br /> I appreciate the time that you take for visiting
                        my website. ✌
                    </p>
                    <p></p>
                    <p>
                        Four years ago I started to study computacional systems
                        engineering at the "Instituto Tecnológico de Toluca".
                        I've practiced for two years ago by myself web technologies for
                        frontend and since that I fell in love💕. I studied and took courses at{" "}
                        <a
                            href="https://platzi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Platzi
                        </a>{" "}
                        and other platforms like Udacity and Udemy, I love
                        reading books about startups, business topics and
                        programming.
                    </p>
                    <Heading>My skills</Heading>
                    <p>
                        Some of the technologies that I use are: <br /> HTML,
                        CSS, SASS, JS, React.js, Styled-Components, GraphQL, Apollo and Next.js. 
                        And a little bit of Node, Mysql,
                        Express.js, Java and MongoDB.
                    </p>
                    <Heading>My hobbies</Heading>
                    <p>
                        I have other passions like...
                        <br />
                        Listen music 🎶 I really love listen music and apreciate every sound of a song.
                        <br />
                        I enjoy play basketball. 🏀
                    </p>
                    <p>
                        Here are some of the certificates I obtained at Platzi. 😁
                    </p>
                    <Certifications>
                        <StyledImage
                            src="/desarrolloWeb.PNG"
                            alt="Desarrollo Web"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 25vw"
                        />
                        <StyledImage
                            src="/cssgrid.PNG"
                            alt="Css grid"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 25vw"
                        />
                        <StyledImage
                            src="/responsiveDesign.PNG"
                            alt="Responsive Design"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 25vw"
                        />
                        <StyledImage
                            src="/htmlycss.PNG"
                            alt="HTML y CSS"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 26vw"
                        />
                        <StyledImage
                            src="/sass.PNG"
                            alt="Sass"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 25vw"
                        />
                        <StyledImage
                            src="/sistemasDeDisenio.PNG"
                            alt="sistemas de diseño"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 26vw"
                        />
                        <StyledImage
                            src="/sistemasDeDisenioo.PNG"
                            alt="sistemas de diseño"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 26vw"
                        />
                        <StyledImage
                            src="/bootstrap.PNG"
                            alt="bootstrap"
                            layout="fill"
                            quality={100}
                            unsized
                            sizes="(max-width: 767px) 65vw, (min-width: 768px) 26vw"
                        />
                    </Certifications>
                </AboutSection>
            </AboutWrapper>
        </>
    );
}

export default About;