import styled from 'styled-components';

const HomeWrapper = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.primary};
`
const TextWrapper = styled.div`
    width: 50vw;
    text-align: left;

    @media only screen and (max-width: 425px) {
        width: 70vw;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3em;
    }
`

const Img = styled.img`
    width: 20%;
    border-radius: 50%;

    @media only screen and (max-width: 425px) {
        width: 40%;
    }
`;

const TitleSpan = styled.span`
    color: ${props => props.theme.textColorSecondary};
`

const Home = ({ avatar }) => {
    return (
        <HomeWrapper>
            <TextWrapper>
                <h1>HI, I'M <TitleSpan>ALAN SALINAS</TitleSpan>.</h1>
                <p>I'M FRONTEND DEVELOPER.</p>
                <p>I'VE FINISHED MY LAST SEMESTER OF COMPUTACIONAL SYSTEMS ENGINEERING.</p>
                <p>I'M A PASSIONATE ABOUT DEVELOPMENT, TECHNOLOGY AND STARTUP TOPICS.</p>
            </TextWrapper>
            <Img src={avatar} alt="Alan Salinas" />
        </HomeWrapper >
    )
}

export default Home;