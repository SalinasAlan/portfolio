import Head from 'next/head'
import Header from '../../Components/Header'
import styled from 'styled-components'
import Image from 'next/image'
import * as gtag from '../../lib/gtag'

export const ProjectWrapper = styled.div`
    max-width: 100%;
    margin: 0;
    padding-top: 50px;
    background: ${props => props.theme.primary};
`

export const ProjectSection = styled.section`
    width: 70%;
    margin: auto auto;
    padding-bottom: 300px; 
    font-size: 1.2em;
    color: ${props => props.theme.textColor};
    
    @media only screen and (max-width: 767px){
        padding-bottom: 100px; 
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3em;
    }
`;

export const ProjectInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;

    @media only screen and (max-width: 767px){
        width: 100%;
        display: block;
    }
`;

export const ProjectInfoItem = styled.div`
    width: 100%;
`;

export const Heading = styled.h1`
    margin-top: 100px;
`;

export const NeonHeading = styled.h1`
    font-size: 3em;
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .3vw .3vw .1vw #806914;
    color: #FED128;

    @media only screen and (max-width: 767px){
        font-size: 1em;
    }
`;

export const Heading2 = styled.h4`
    margin-top: 100px;
    text-align: center;

    @media only screen and (max-width: 767px){
        text-align: left;
        margin-top: 20px;
    }
`;

export const Text = styled.p`
    text-align: justify;
`;

export const Anchor = styled.a`
    font-weight: bold;
    border-bottom: 2px solid white;
`;

export const StyledImage = styled(Image)`
    padding: 0;
    border-radius: 5px;
`;

const findMyRestaurant = () => {

    const openLink = (action, label) => {
        gtag.event({
            action: action,
            category: 'findMyRestaurant',
            label: label,
        })
    }

    return (
        <>
            <Head>
                <title>Project - findMyRestaurant</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="findMyRestaurant is a personal project by Alan Salians to find beautiful places to eat in CDMX"></meta>
            </Head>
            <Header />
            <ProjectWrapper>
                <ProjectSection>
                    <NeonHeading>findMyRestaurant</NeonHeading>
                    <Text>
                        This application is other of my personal project, this project basically is 
                        to help people to find intereting and beautiful restaurants in CDMX, Mexico.  
                    </Text>
                    <StyledImage
                        src="/findmyrestaurant.png"
                        alt="ToDo list app by Alan Salinas  "
                        layout="fill"
                        quality={100}
                        unsized
                        sizes="(max-width: 767px) 70vw, (min-width: 768px) 70vw"
                    />
                    <ProjectInfo>
                        <ProjectInfoItem>
                            <Heading2>Stack</Heading2>
                            <ul>
                                <li>Next.js</li>
                                <li>GrapQL</li>
                                <li>Apollo</li>
                                <li>Styled-Components</li>
                            </ul>
                        </ProjectInfoItem>
                        <ProjectInfoItem>
                            <Heading2>Code</Heading2>
                            <Text>You can see the code {' '}
                                <Anchor
                                    onClick={() => openLink('openGithubProject', 'Code')}                             
                                    href="https://github.com/SalinasAlan/dashboard"
                                    target="_blank">here!   
                                </Anchor>
                            </Text>
                        </ProjectInfoItem>
                        <ProjectInfoItem>
                            <Heading2>Live</Heading2>
                            <Text>
                                Go and play with it {' '}
                                <Anchor
                                    onClick={() => openLink('openLiveProject', 'Live')}
                                    href="https://findmyrestaurant.vercel.app/"
                                    target="_blank">here!
                                </Anchor>
                            </Text>
                        </ProjectInfoItem>
                    </ProjectInfo>

                    <Heading>Goal</Heading>
                    <Text>
                        My main goal with this project was to created an project to help people to 
                        find restaurants in CDMX, Mexico and give them all the information 
                        of every restaurant. Also give them a map to indentified where the restaurant are
                        in the city.
                        <br />
                        <br />
                        As you can see in the next images, inside of the project I desing a sidebar to 
                        display the options to the user. The main option are the restaurants and the map.
                    </Text>

                    <StyledImage
                        src="/findmyrestaurant2.png"
                        alt="ToDo list app by Alan Salinas  "
                        layout="fill"
                        quality={100}
                        unsized
                        sizes="(max-width: 767px) 70vw, (min-width: 768px) 70vw"
                    />
                    <StyledImage
                        src="/findmyrestaurant3.png"
                        alt="ToDo list app by Alan Salinas  "
                        layout="fill"
                        quality={100}
                        unsized
                        sizes="(max-width: 767px) 70vw, (min-width: 768px) 70vw"
                    />

                    <Heading>Web stack and Explanation:</Heading>
                    <Text>
                        I used Next.js because it super easy connect QraphQL with it and implent server side rendering.
                        <br/>
                        But... Why QraphQL?? 
                        <br/>
                        Well, I used it because I wanted to learn how to connect an application of React GraphQL
                        and Hasura give that option to conect with an GraphQL server and store the data online.  
                    </Text>

                    <Heading>Problems and thought process</Heading>
                    <Text>
                        The big challenge was understand how to use Apollo to conect with the app, how to send the queries
                        and fetch the data.
                        <br />
                        <br />
                        Another challenge that I faced was to implement GrapQL and user the power of Next.js to create 
                        server side rendering. 
                    </Text>
                    <Heading>Lessons learned</Heading>
                    <Text>
                        I am so happy with this project because finally I understand how to connect GraphQL with an
                        React application and use the Next.js framework to do server side rendering.    
                    </Text>
                </ProjectSection>
            </ProjectWrapper>
        </>
    );
}

export default findMyRestaurant;