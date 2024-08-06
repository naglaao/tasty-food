import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from './SearchBar';



const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);

    return (
        <div className="headerPaddingMob" style={{ paddingTop: "60px"}}>
            {/* desktop view */}
            <div>
            <Navbar className="bg-light headerMob" style={{ height: "60px", color: "white", position: "fixed", width: "100%", top: 0, zIndex: 10 }} >
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                   <img src='https://media-cdn.tripadvisor.com/media/photo-s/19/db/fc/c5/tasty.jpg' style={{width:"60px"}} alt={"logo"}></img>
                </NavLink>
                {/* search bar */}
                <div className='desktop'>
                <SearchBar/>
                <Navbar>
                    <NavLink style={{paddingRight:"10px"}} to="/login">
                    <Button style={{ width:"100px", background: "#7e9f60", border: "none" }} variant='outline-light'>Login</Button>
                    </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping" style={{color:"#7e9f60"}}></i>
                        </span>
                    </div>
                    </NavLink>
                </Navbar>
                    </div>
                </Container>
            </Navbar>
            </div>

            {/* mobile view */}
            <div className='mobile' >
            <Navbar className="bg-light" style={{ height: "60px", color: "black", position: "fixed", width: "100%", bottom: 0, zIndex: 10 }} >
                <Container>
                <NavLink to="/foodlist" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                        <i class="fa-solid fa-drumstick-bite"style={{color:"#7e9f60"}}></i>
                        </span>
                    </div>
                    </NavLink>
                <NavLink to="/search" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                            <i class="fa-solid fa-search"style={{color:"#7e9f60"}}></i>
                        </span>
                    </div>
                    </NavLink>
                <NavLink to="/login" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                            <i class="fa-solid fa-user"style={{color:"#7e9f60"}}></i>
                        </span>
                    </div>
                    </NavLink>

                <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"style={{color:"#7e9f60"}}></i>
                        </span>
                    </div>
                    </NavLink>
                </Container>
            </Navbar>
            </div>
        </div>
    )
}

export default Headers