import Head from 'next/head'
import Header from '../../Components/Header'
import * as gtag from '../../lib/gtag'
import {
    ProjectWrapper,
    ProjectSection,
    NeonHeading,
    Text,
    StyledImage,
    ProjectInfo,
    ProjectInfoItem,
    Heading,
    Heading2,
    Anchor
} from './findMyRestaurant'

const todo = () => {

    const openLink = (action, label) => {
        gtag.event({
            action: action,
            category: 'todo',
            label: label,
        })
    }

    return (
        <>
            <Head>
                <title>Project - todo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="todo is a personal project by Alan Salians to organize your tasks and store them in the cloud"></meta>
            </Head>
            <Header />
            <ProjectWrapper>
                <ProjectSection>
                    <NeonHeading>ToDo</NeonHeading>
                    <Text>
                        This application is my personal project where I upload to firebase the
                        todo's of the users and authenticate them.
                    </Text>
                    <StyledImage
                        src="/todoAppImage.png"
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
                                <li>Firebase</li>
                                <li>Styled-Components</li>
                            </ul>
                        </ProjectInfoItem>
                        <ProjectInfoItem>
                            <Heading2>Code</Heading2>
                            <Text>You can see the code {' '}
                                <Anchor
                                    onClick={() => openLink('openGithubProject', 'Code')}
                                    href="https://github.com/SalinasAlan/Todo"
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
                                    href="https://todo-lyart.vercel.app/"
                                    target="_blank">here!
                                </Anchor>
                            </Text>
                        </ProjectInfoItem>
                    </ProjectInfo>

                    <Heading>Goal</Heading>
                    <Text>
                        My main goal was to try to implement a form to authenticate the user
                        and fetch all their todo's, this application store all the todo in the database
                        that firebase offers.
                        <br />
                        Thanks to firebase database, the ToDo list update in real time.
                    </Text>

                    <StyledImage
                        src="/todoAppImage2.png"
                        alt="ToDo list app by Alan Salinas  "
                        layout="fill"
                        quality={100}
                        unsized
                        sizes="(max-width: 767px) 70vw, (min-width: 768px) 70vw"
                    />

                    <Heading>Web stack and Explanation:</Heading>
                    <Text>
                        I used Next.js because I want to practice this framework for react, it is
                        super easy to use and I feel comfortable to using it, I love the way that
                        Next.js use the page folder and how dynamic it is.
                        <br />
                        <br />
                        In previous projects I've been using firebase, so this time I decided to use
                        it again  for store the data of the todo of every user and also to implente
                        the authentication process.
                    </Text>

                    <Heading>Problems and thought process</Heading>
                    <Text>
                        I had some problems because in this project was the first time I try to
                        implement an authentication process, that was really confuse to me but I
                        force me to read more about it and try to understand.
                        <br />
                        I struggle with it but at the end, I try to do it.
                    </Text>
                    <Heading>Lessons learned</Heading>
                    <Text>
                        When I was reading about auth, I found a video of a cool guy that explain
                        this process and that open my mind to understand more about how store cookies. Also, I
                        found a library for Next.js call NextAuth.js which integret a lot of authentication
                        providers like Auth0 or do it with databases and I want to taste it in next projects.
                    </Text>
                </ProjectSection>
            </ProjectWrapper>
        </>
    );
}

export default todo;