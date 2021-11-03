import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button,
	Navbar,
	Nav,
	Container,
	Form,
	FormControl,
	Card,
	Body,
	Img,
	Title,
	Text,
	CardGroup
} from 'react-bootstrap';
import WatchLaterReducer, { add } from '../reducer/WatchLater';
import { WatchLater } from '../reducer/WatchLater';
import { useDispatch, useSelector } from 'react-redux';





function Home() {
  
	const [ youTube, setYouTube ] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyBsAUBelvNLJVObjYfJSnW_jDejTh5vfrQ'
			)
			.then((res) => {
				setYouTube(res.data.items);
				console.log(res.data.items);
			});
	}, []);
	
    



    //watchLaterection
    // 
    //     const state = useSelector((store)=>{
    //         return{
    //             setwatchLater:state.WatchLater.watchLater
    
    //         }
    // })  
    const dispatch = useDispatch();
    
    function watchLaterFun(t){
        dispatch (add(t))

        
    }
	//return
	return (
		<div className="main">
			<div className="con">
				<div className="map">
					{youTube.map((e, key) => {
						return (
							<Card>
                            <iframe width="536" height="345" src={`https://www.youtube.com/embed/${e.id.videoId}`}/>
								<Card.Body>
									<Card.Title>{e.snippet.title}</Card.Title>
									<Card.Text>{e.snippet.description}</Card.Text>
								</Card.Body>
								<Card.Footer>
							
								
								<Button  onClick={()=>watchLaterFun(e)} variant="primary">
									<h6> Watch Later</h6>
								</Button>
                                </Card.Footer>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
    
}

export default Home;
