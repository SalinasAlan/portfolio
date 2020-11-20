import styled from 'styled-components'
import Image from 'next/image'

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