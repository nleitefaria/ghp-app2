import React, { Component } from 'react';
import {PlanetsProvider} from "../../context/PlanetsContext";
import PlanetsContent from "../planets/PlanetsContent";

const apiURL = 'https://swapi.co/api/';

class Planets extends Component
{
	constructor(props)
	{
		super(props);
        this.state = {
        		results: [],
        		columns: [
        			{ name: 'name', title: 'Name'},
        			{ name: 'rotation_period', title: 'Rotation period' },
        			{ name: 'orbital_period', title: 'Orbital period' },
        			{ name: 'diameter', title: 'Diameter' },
        			{ name: 'climate', title: 'Climate' },
        			{ name: 'gravity', title: 'Gravity' },
					{ name: "action", title: "Action" }
        		],
        		rows: [],
        		totalCount: 0,
        		currentPage: 0,
        		loading: true,
			    modal: false
        };

        this.changeCurrentPage = this.changeCurrentPage.bind(this);
	}

	componentDidMount()
	{
		this.loadData();
	}

	componentDidUpdate()
	{
		this.loadData();
	}

	changeCurrentPage(currentPage)
	{
		this.setState({
			loading: true,
			currentPage: currentPage,
		});
	}

	queryString()
	{
		const { currentPage } = this.state;
		var cPage = Number(currentPage) + 1;
		return apiURL.concat('planets/').concat('?format=json&page=').concat(cPage);
	}

	loadData()
	{
		const queryString = this.queryString();
		if (queryString === this.lastQuery)
		{
		    return;
		}

		fetch(queryString)
		      .then(response => response.json())
		      .then(data => this.setState({
		        rows: data.results,
		        totalCount: data.count,
		        loading: false,
		      }))
		      .catch(() => this.setState({ loading: false }));
		    this.lastQuery = queryString;
	 }

	render()
	{

			return (
				<div>
					<PlanetsProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >
						<PlanetsContent />
					</PlanetsProvider>
				</div>
			    );
		}
	}

export default Planets;
