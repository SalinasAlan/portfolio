import Link from 'next/link'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.textColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    &.hide {
    visibility: hide;
    transition: all ease 0.5s;
    transform: translateX(-100%);
    }

    &.show {
        visibility: visible;
        transition: all ease 0.5s;
        transform: translateX(0);
    }
`

const List = styled.ul`
    font-size: 3em;
    width: 50%;
    height: 70%;
    margin: auto auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ListItem = styled.li`
    margin-bottom: 30px;
    list-style-type: none;
`

const Item = styled.a`
    cursor: pointer;
    color: #1f1f1f;
    text-decoration: none;
    list-style-type: none;

    && :hover{
        color: ${props => props.theme.textColorSecondary};
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3em;
    }
`

const HideButton = styled.button`
    position: fixed;
    right: 0;
    top: 0;
    width: 50px;
    justify-content: right;
    border: 0;
    font-size: 3em;
    color: #1f1f1f;
    font-weight: 700;
    background: transparent;
    float: right;
    margin: 30px 50px 0 0;
    outline: 0;
    cursor: pointer;

    && :hover{
        color: ${props => props.theme.textColorSecondary};;
    }

    @media only screen and (max-width: 425px) {
        /* #navbar { */
            button {
            font-size: 2em;
            float: right;
            margin: 20px 30px 0 0;
        }
        /* } */
    }
    
    @media only screen and (min-width: 2560px) {
        margin: 70px 50px 0 0;
        font-size: 4em;
        font-weight: 700;
    }
`

const Navbar = () => {

    const hideMenu = () => {
        const navBar = document.getElementById("navbar");
        if (navBar.className.includes("show")) {
            const classNameHide = navBar.className.replace("show", "hide");
            navBar.className = classNameHide;
        }
    };

    return (
        <NavbarWrapper className="hide" id="navbar">
            <HideButton onClick={hideMenu}>-</HideButton>
            <List>
                <ListItem onClick={hideMenu}>
                    <Link href="/">
                        <Item>Home</Item>
                    </Link>
                </ListItem>
                <ListItem onClick={hideMenu}>
                    <Link href="/about">
                        <Item>About</Item>
                    </Link>
                </ListItem>
                <ListItem onClick={hideMenu}>
                    <Link href="/portfolio">
                        <Item>Portfolio</Item>
                    </Link>
                </ListItem>
                <ListItem onClick={hideMenu}>
                    <Link href="/contact">
                        <Item>Contact</Item>
                    </Link>
                </ListItem>
            </List>
        </NavbarWrapper>
    );
}

export default Navbar;