import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import Home from './Home';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Films from './Films';

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
	            							<li><NavLink to="/species">Species</NavLink></li>
	            							<li><NavLink to="/people">People</NavLink></li>
	            							<li><NavLink to="/planets">Planets</NavLink></li>
	            							<li><NavLink to="/vehicles">Vehicles</NavLink></li>
	            							<li><NavLink to="/starships">Starships</NavLink></li>
                                            <li><NavLink to="/films">Films</NavLink></li>
											
	            						</ul>
	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/species" component={Species}/>
	            							<Route path="/people" component={People}/>
	            							<Route path="/planets" component={Planets}/>
	            							<Route path="/vehicles" component={Vehicles}/>
	            							<Route path="/starships" component={Starships}/>
                                            <Route path="/films" component={Films}/>
	            						
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
