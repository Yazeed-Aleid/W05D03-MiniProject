import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultAction } from '../reducer/SearchReducer';
import axios from 'axios';
import { Button, Navbar, Nav, Container, Form, FormControl,Card,Body,Img,Title,Text,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchResault() {
	const state = useSelector((store) => {
		return {
			theWord: store.searchReducer.searchWord,
			searchV: store.searchReducer.searchV
		};
	});

	const dispatch = useDispatch();

	//const searchApi =  (e)=>{
	let word;
    const [valueOfResult , setValueOfResult] = useState([])

	useEffect(
		() => {
			word = state.theWord;
			console.log(state.theWord);
			axios
				.get(
					`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${state.theWord}&key=AIzaSyBsAUBelvNLJVObjYfJSnW_jDejTh5vfrQ`
				)
				.then((res) => {
					console.log(state.theWord);
					console.log(res.data.items);
                    console.log(state.searchV);
					dispatch(resultAction(res.data.items));
                    setValueOfResult(state.searchV)
					
				});
		},
		[state.theWord]
	);

	//}

	// dispatch(resultAction)

    
	return(
         <div >
         <h1>search Results</h1>
    <div className = 'SearchResult'>
        
    
    {valueOfResult?.map((e, key) => {
                
        return (
           <div >
               
           
           <Card>
            
        <iframe width="536" height="345" src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
               
               <Card.Body>
               <Card.Title>{e.snippet.title}</Card.Title>
               <Card.Text>{e.snippet.description}</Card.Text>
               </Card.Body>
               
           </Card>
           
           </div>
           
       )
       
   })}
    </div>
   
    </div>
    )
}
export default SearchResault;
