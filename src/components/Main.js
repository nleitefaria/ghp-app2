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
import Planets from './Planets';
import Species from './Species';

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
	            							<li><NavLink to="/planets">Planets</NavLink></li>
														<li><NavLink to="/species">Species</NavLink></li>

	            						</ul>
	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/people" component={People}/>
	            							<Route path="/planets" component={Planets}/>
														<Route path="/species" component={Species}/>

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
