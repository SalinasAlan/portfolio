import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Components/Header'

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

const Certifications = styled.div`
    margin: auto auto;
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    & img {
        width: 40%;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 425px){
        width: 100%;
        display: block;

        & img {
            width: 100%;
        }
    }


`

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
                    <p>
                        Some of the technologies that I use are: <br /> HTML,
                        CSS, SASS, Boostrap, JS, React.js. And a little bit of Node, Mysql,
                        Express.js, Java and MongoDB.
                    </p>
                    <p>
                        I have other passions like...
                        <br />
                        Listen music 🎶 I really love listen music and apreciate every sound of a song.
                        <br />
                        I enjoy play basketball. 
                    </p>
                    <p>
                        Here are some of the certificates I obtained at Platzi. 😁
                    </p>
                    <Certifications>
                        <img src="/desarrolloWeb.png" alt="Desarrollo Web" />
                        <img src="/cssgrid.png" alt="Css grid" />
                        <img src="/responsiveDesign.png" alt="Responsive Design" />
                        <img src="/htmlycss.png" alt="HTML y CSS" />
                        <img src="/sass.png" alt="Sass" />
                        <img src="/sistemasDeDisenio.png" alt="sistemas de diseño" />
                        <img src="/sistemasDeDisenioo.png" alt="sistemas de diseño" />
                        <img src="/bootstrap.png" alt="bootstrap" />
                    </Certifications>
                </AboutSection>
            </AboutWrapper>
        </>
    );
}

export default About;