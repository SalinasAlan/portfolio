import Link from 'next/link'
import styled from 'styled-components';
import * as gtag from '../lib/gtag'
import Navbar from './Navbar'

const HeaderWrapper = styled.header`
    padding: 0 50px 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    height: 15vh;
    justify-items: center;
    background: ${props => props.theme.primary};

    @media only screen and (max-width: 425px) {
        padding: 0 50px 0 50px;
    }
`;

const Icon = styled.h1`
    font-size: 3em;
    margin: 0;
    color: ${props => props.theme.textColor};
    cursor: pointer;

    @media only screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 5em;
    }

`
const MenuButton = styled.button`
    color: #f2f4f4;
    font-size: 2em;
    cursor: pointer;
    font-weight: 700;
    border: none;
    background: transparent;
    outline: 0;

    @media only screen and (min-width: 2560px) {
        font-size: 5em;
    }
`

const Header = () => {

    const showMenu = () => {
        gtag.event({
            action: 'show-navbar',
            category: 'Header',
            label: 'show',
        })
        const navBar = document.getElementById("navbar");
        if (navBar.className.includes("hide")) {
            const className = navBar.className.replace("hide", "show");
            navBar.className = className;
        }
    };

    return (
        <>
            <HeaderWrapper>
                <Link href="/">
                    <Icon>AS</Icon>
                </Link>
                <MenuButton onClick={showMenu}>+</MenuButton>
                <Navbar />
            </HeaderWrapper>
        </>
    );
}

export default Header;