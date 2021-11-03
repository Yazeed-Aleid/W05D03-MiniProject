import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Form, FormControl,Card,Body,Img,Title,Text,CardGroup } from 'react-bootstrap';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../reducer/WatchLater';

function WatchLater(){

    const state = useSelector((store)=>{
        return{
            setwatchLater:store.WatchLaterReducer.watchLater

        }
    })
    
   
const dispatch = useDispatch();


    const removeItem = (id)=>{
        dispatch(remove(id))
    }
    
    useEffect(()=>{

        console.log(state.setwatchLater);

    
    })





    
    









    
    return(
        <div>
        <div className="map">
        {state.setwatchLater.map((e, key) => {
            
            return (
                <Card>
                <iframe width="537" height="345" src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
                    <Card.Body>
                        <Card.Title>{e.snippet.title}</Card.Title>
                        <Card.Text>{e.snippet.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => removeItem(e.id)} variant="danger">
                            <h6>Remove</h6>
                        </Button>
                    
                   
                    </Card.Footer>
                </Card>
            );
        })}
    </div>
        </div>
    )
}
export default WatchLater;