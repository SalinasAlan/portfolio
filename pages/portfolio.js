import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Components/Header';
import ProjectCard from '../Components/ProjectCard'

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
                <meta name="Description" content="Portfolio de Alan Salinas, desarrollador frontend"></meta>
            </Head>
            <Header />
            <PortfolioWrapper>
                <PortfolioSection>
                    <Title>My personal projects</Title>
                    <Proyects>
                        <ProjectCard
                            title="findMyRestaurant"
                            srcImage="/findmyrestaurant2.png"
                            alt="findMyRestaurant by Alan Salinas"
                            desc="An aplication to find restaurants in CDMX, Mexico."
                            page="/projects/findMyRestaurant"
                        />
                        <ProjectCard
                            title="ToDo"
                            srcImage="/todoAppImage2.png"
                            alt="toDo by Alan Salinas"
                            desc="ToDo to organize your tasks and store them in the cloud."
                            page="/projects/todo"
                        />
                    </Proyects>
                </PortfolioSection>
            </PortfolioWrapper>
        </>
    );
}

export default Portfolio;