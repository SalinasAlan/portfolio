import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const CardInfo = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    color: white;

    @media only screen and (max-width: 425px){
        width: 100%;
        display: block;
    }
`

const ImageContainer = styled.div`
    width: 50%;
    text-align: center;

    @media only screen and (max-width: 767px){
        width: 100%;
    }
`;

const ProjectDescription = styled.div`
    width: 50%;
    padding-left: 50px;

    @media only screen and (max-width: 767px){
        width: 100%;
        padding-left: 10px;
        text-align: left;
    }
`
const Description = styled.p`
    margin-bottom: 30px;
`;

const LinkContainer = styled.div`
    cursor: pointer;
    display: flex;
`;

const Icon = styled.svg`
    width: 20px;
`;

const ProjectCard = ({ title, srcImage, alt, desc, page }) => {
    return (
        <>
            <CardInfo>
                <ImageContainer>
                    <Image
                        src={srcImage}
                        alt={alt}
                        unsized
                    />
                </ImageContainer>
                <ProjectDescription>
                    <h2>
                        {title}
                    </h2>
                    <Description>
                        {desc}
                    </Description>
                    <LinkContainer>
                        <Link href={page}>
                            <a>
                                VIEW PROJECT
                            </a>
                        </Link>
                        <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </Icon>
                    </LinkContainer>
                </ProjectDescription>
            </CardInfo>
        </>
    );
}

export default ProjectCard;