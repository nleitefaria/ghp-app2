import React, { Component } from 'react';
import { PeopleProvider } from "../../context/PeopleContext";
import PeopleContent from './PeopleContent';

const apiURL = 'https://swapi.co/api/';

class People extends Component
{
	constructor(props)
	{
		super(props);
        this.state = {
        		results: [],
        		columns: [
        			{ name: 'name', title: 'Name'},
        			{ name: 'height', title: 'Height' },
        			{ name: 'mass', title: 'Mass' },
        			{ name: 'hair_color', title: 'Hair Color' }

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
			return apiURL.concat('people/').concat('?format=json&page=').concat(cPage);
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
			    <PeopleProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >          
                    <PeopleContent />
                </PeopleProvider>  
			);
		}
	}

export default People;
