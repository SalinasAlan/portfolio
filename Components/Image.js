import styled from 'styled-components';

const ImageInfo = styled.div`
    width: 48%;
    margin-bottom: 20px;
    padding-top: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgba(255, 255, 255, 0.8);

    @media only screen and (max-width: 425px){
        width: 100%;
    }
`

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

const Image = ({ src, alt, desc, webSite, github }) => {
    return (
        <>
            <ImageInfo>
                <img src={src} alt={alt} />
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

export default Image;