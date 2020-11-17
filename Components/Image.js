import styled from 'styled-components';
import Image from 'next/image';

const ImageInfo = styled.div`
    width: 48%;
    margin-bottom: 20px;
    padding: 20px; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgba(255, 255, 255, 0.8);

    @media only screen and (max-width: 425px){
        width: 100%;
    }
`

const ImageContainer = styled.div`
    text-align: center;
`;

const ImageDescription = styled.p`
    width: 70%;
    text-align: center;
`

const ImageIcon = styled.div`
    flex-direction: row;
    padding: 10px;
    font-size: 3em;
    text-decoration: none;

    i {
        margin: 40px;
        color: $backgroundColor_app;
    }
`

const ImageComponent = ({ src, alt, desc, webSite, github }) => {
    return (
        <>
            <ImageInfo>
                <ImageContainer>
                    <Image
                        src={src}
                        alt={alt}
                        unsized
                    />
                </ImageContainer>
                {/* <img src={src} alt={alt} /> */}
                <ImageDescription>{desc}</ImageDescription>
                <ImageIcon className="image__icons">
                    {webSite !== "none" ? (
                        <a
                            href={webSite}
                            className="image__icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-globe"></i>
                        </a>
                    ) : (
                            ""
                        )}
                    {github !== "none" ? (
                        <a
                            href={github}
                            className="image__icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    ) : (
                            ""
                        )}
                </ImageIcon>
            </ImageInfo>
        </>
    );
}

export default ImageComponent;