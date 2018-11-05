import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
} 
from "react-router-dom";
import 
{
	  Container, Row, Col
} 
from 'reactstrap';

import Home from './Home';
import People from './People';
	
class Main extends Component 
{
	  render() {
	    return (
	    		<HashRouter>
	            	<div>
	            		<div>								
	            			<Container>
	            				<Row>
	            					<Col>
	            						<ul className="header">
	            							<li><NavLink to="/">Home</NavLink></li>
	            							<li><NavLink to="/people">People</NavLink></li>
	            							
	            						</ul>
	            					
	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/people" component={People}/>
	            						</div>	              		              	           	
	            					</Col>
	            				</Row>
	            			</Container>
	            		</div>  	
	            	</div>
	            </HashRouter>
	    );
	  }
}
	 
export default Main;