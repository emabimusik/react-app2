import {React} from   "react";
import {FaBars} from "react-icons/fa";
import { Switch } from "antd";
import i18n from "../../i18n";
import { Nav,NavBarContainer,NavLogo,NavMenu,MobileIcon,NavItem,NavLinks,NavBtnLink,      
    NavBtn} from "./NavBarElements";
const Navbar =({toggle}) =>{
    const onChangeLanguage = checked => {
        // if checked is false, French should be adopted
        if (!checked) {
          i18n.changeLanguage("dk");
     
        } else {
          i18n.changeLanguage("en");
      
        }
      };
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
                        <div>
                        <Switch
                            checkedChildren="EN"
                            unCheckedChildren="DK"
                            defaultChecked
                            onChange={onChangeLanguage}
                        />
                        </div>     
                        </NavBtn>
                  
                       
                
            </NavBarContainer>
       </Nav>
       </>
    )
}

export default Navbar;