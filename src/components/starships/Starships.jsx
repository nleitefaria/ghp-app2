import React, { Component } from 'react';
import { StarshipsProvider } from "../../context/StarshipsContext";
import StarshipsContent from './StarshipsContent';

const apiURL = 'https://swapi.co/api/';

class Starships extends Component
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
		return apiURL.concat('starships/').concat('?format=json&page=').concat(cPage);
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
                        <StarshipsProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >          
                            <StarshipsContent />
                        </StarshipsProvider>                 
			        </div> 		        		        
			    );
		}
	}

export default Starships;
