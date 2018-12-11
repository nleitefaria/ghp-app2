import React, { Component } from 'react';
import { SpeciesProvider } from "../../context/SpeciesContext";
import SpeciesContent from './SpeciesContent';

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
        			{ name: 'designation', title: 'Designation' },
        			{ name: 'average_height', title: 'Average height' },
        			{ name: 'hair_colors', title: 'Hair colors' },
        			{ name: 'eye_colors', title: 'Eye colors' },
					{ name: 'average_lifespan', title: 'Average lifespan' },
					{ name: 'action', title: ' '}
        		],
        		rows: [],
        		totalCount: 0,
        		currentPage: 0,
        		loading: true,
				modal: false,
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
		return apiURL.concat('species/').concat('?format=json&page=').concat(cPage);
	}

	loadData()
	{
		const queryString = this.queryString();
		if (queryString === this.lastQuery) {
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
	                <SpeciesProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >          
			            <SpeciesContent />
			        </SpeciesProvider>
			      </div>
			    );
		}
	}

export default Planets;
