import React, { Component } from 'react';
import { VehiclesProvider } from "../../context/VehiclesContext";
import VehiclesContent from './VehiclesContent';

const apiURL = 'https://swapi.co/api/';

class Vehicles extends Component
{
	constructor(props)
	{
		super(props);
        this.state = {
        	results: [],
        	columns: [
        		{ name: 'name', title: 'Name'},
        		{ name: 'model', title: 'Model' },
        		{ name: 'manufacturer', title: 'Manufacturer' }
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
		return apiURL.concat('vehicles/').concat('?format=json&page=').concat(cPage);
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
			        <VehiclesProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >          
                        <VehiclesContent />
			        </VehiclesProvider>			      	
			      </div>
			    );
		}
	}

export default Vehicles;
