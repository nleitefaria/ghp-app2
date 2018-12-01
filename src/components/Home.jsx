import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {
	  render() {
		  return (
			      <div>
			      	<hr></hr>
			      	<br></br>
			      	<br></br>
			      	<h2>This project is a client for the <a href="https://swapi.co/" rel="noopener noreferrer" target="_blank">The Star Wars RESTFul API</a>.</h2>
			      	<br></br>
			      	<h3>Please browse the following subjects to get more info:</h3>
			      	<br></br>
			      		<div>
			      			- <NavLink to="/species">Species</NavLink>
			      			<br></br>
			      			- <NavLink to="/people">People</NavLink>
			      			<br></br>
			      			- <NavLink to="/planets">Planets</NavLink>
			      			<br></br>
			      			- <NavLink to="/vehicles">Vehicles</NavLink>
			      			<br></br>
			      			- <NavLink to="/starships">Starships</NavLink>
			      			<br></br>
                            - <NavLink to="/films">Films</NavLink>
                            <br></br>
			      			
			      		</div>
			      </div>
			    );
			  }
}

export default Home;
