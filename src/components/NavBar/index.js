import {React} from   "react";
import {FaBars} from "react-icons/fa";
import { Nav,NavBarContainer,NavLogo,NavMenu,MobileIcon,NavItem,NavLinks,NavBtnLink,      
    NavBtn} from "./NavBarElements";
const Navbar =({toggle}) =>{

    return (
        <>
       <Nav>
           <NavBarContainer>
                <NavLogo to="/">Like </NavLogo>
                    <MobileIcon onClick={toggle}>
                    <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks  to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/signup'>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                        <NavBtn>
                        <NavBtnLink to='/signIn'> logIn</NavBtnLink>      
                        </NavBtn>
                  
                
            </NavBarContainer>
       </Nav>
       </>
    )
}

export default Navbar;