import React, { Component } from 'react';
import { BrowserRouter, Link} from 'react-router-dom'
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                     <Link to ="/">
                          <img src={logo} alt="store" className="navbar-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                    </li>
                    </ul>
                    <Link to="/Cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fa fa-cart-plus"></i>
                            </span>
                            
                            my cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </BrowserRouter>
        );
    }
}

const NavWrapper =styled.nav`
background : var(--mainBlue);
.nav-lin{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-tranform: capitalize !important;
}
`;


export default Navbar;