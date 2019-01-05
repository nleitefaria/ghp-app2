import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import Home from './Home';
import People from './people/People';
import Planets from './planets/Planets';
import Species from './species/Species';
import Vehicles from './vehicles/Vehicles';
import Starships from './starships/Starships';
import Films from './films/Films';

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
