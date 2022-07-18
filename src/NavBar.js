import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar, NavDropdown, Container, Nav, Button, Collapse } from "react-bootstrap";
import { ABOUT_ROUTE, DEVELOP_ROUTE } from "./utils/consts";
import {observer} from 'mobx-react-lite'
import {useLocation, useNavigate} from 'react-router-dom'
import { MAIN_ROUTE } from "./utils/consts";
import { Context } from "./index";
import leafLogo from './assets/logo/logo.jpeg'
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { observable, makeAutoObservable, makeObservable } from "mobx";

function NavBarComp() {
    const navigate = useNavigate()
    const location = useLocation()
   // console.log(location)
    //const [isExpanded, setIsExpanded] = useState(true)
    const height = useRef(null);
    const [winWidth, setWinWidth] = useState(0)
    const {navbarHeight} = useContext(Context)
    
    //const {winWidth} = useContext(Context)
    function onResize() {
       // console.log(winWidth)
          setWinWidth(window.innerWidth)
        //  console.log(winWidth)
      }
    

    
    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };
   // navbarHeight.setHeight(window.innerHeight)
    useEffect(() => {navbarHeight.setHeight(height.current.offsetHeight); 
        setWinWidth(window.innerWidth)
        //console.log()
        window.addEventListener('resize', onResize)
       
    }, [])
    
    return(
        <Navbar ref={ref => {height.current = ref;}} expand='md' bg="light" variant="light" style={{color: 'blue'}}>
            <Container style={{marginLeft: winWidth < 1000 ? '0%' : '20%', color: "blue", maxWidth: winWidth}}>
            <Navbar.Brand href={MAIN_ROUTE}>
                    
                    <img src={leafLogo} width="60" height="45" alt="Leaf logo" style={{marginTop: winWidth >= 1000 ? '-30px' : '0px'}}/>
                    { winWidth >= 1000  ? 
                    <div style={{display: 'inline-block'}}>
                    
                        Ярославская недвижимость
                        <div style={{fontSize: '12px', marginLeft: '0px'}}>Строительство многоквартирных жилых домов</div>
                        </div> : ''}
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                
                <Nav.Link active={location.pathname === '/'} className={location.pathname === '/' ? "active-link" : ""} href={MAIN_ROUTE}>Главная</Nav.Link>
                <Nav.Link active={location.pathname === '/develop' || location.pathname === '/develop/'} className={location.pathname === '/develop' || location.pathname === '/develop/' ? "active-link" : ""} href={DEVELOP_ROUTE} >Объекты</Nav.Link>
                <Nav.Link active={location.pathname === '/about' || location.pathname === '/about/'} className={location.pathname === '/about' || location.pathname === '/about/' ? "active-link" : ""} href={ABOUT_ROUTE} >О нас</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Text>
                        <a style={{marginRight: 10, color: '#777f'}}>Напишите нам: </a>
                        <ButtonMailto label="zaostroitel@bk.ru" mailto="mailto:zaostroitel@bk.ru"/>
                    </Navbar.Text>
                </Nav>
                </Navbar.Collapse>
                
</Container>
        </Navbar>
    )
}
const NavBar = observer(NavBarComp)
export default NavBar;