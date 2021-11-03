
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Form, FormControl,Card,Body,Img,Title,Text,CardGroup } from 'react-bootstrap';
import React from 'react'
import Home from './Home'; 
import { useDispatch , useSelector } from 'react-redux';
import {saveWord} from '../reducer/SearchReducer'
import SearchResault from './SearchResault';

import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import WatchLater from './WatchLater';
import { useHistory } from 'react-router-dom';


function NavBar(){
    const [search , setSearch] = useState([])
    const dispatch = useDispatch();
    const state = useSelector((store)=>{
        return{
        theWord:store.searchReducer.searchWord
        }
})  

    function addWord(){
        console.log(state.theWord);

    }
//     let history = useHistory();

//     const handleClick = ()=>{
//     history.push('/s')
// }
    // console.log(e.target.parentElement[0].value);
    return(
    <BrowserRouter>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#" >YazeedTube</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    
                    
                    <Nav.Link >
                    <Link exact to = '/'>Home</Link>
                    </Nav.Link>

                    <Nav.Link >
                    <Link to ='/WatchLater'>Watch Later</Link>
                    </Nav.Link>


                    <Nav.Link >
                    <Link to ='/search'>search</Link>
                    </Nav.Link>

                  
                    
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl onChange={(e)=>{dispatch(saveWord(e.target.value))}} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button onClick={addWord} variant="outline-success" >Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Switch>
    <Route exact path ='/'><Home/></Route>
    <Route path ='/search'><SearchResault/></Route>
    <Route path = '/WatchLater'><WatchLater/></Route>

    {/* <Route  path ='/WatchLater'><WatchLater/></Route> */}

    </Switch>
    </BrowserRouter>
    
    )
}export default NavBar