import React, { Component } from 'react';
import { FilmsProvider } from "../../context/FilmsContext";
import FilmsContent from './FilmsContent';


const apiURL = 'https://swapi.dev/api/';

class Films extends Component
{
	constructor(props)
	{
		super(props);
        this.state = {
        		results: [],
        		columns: [
        			{ name: 'title', title: 'Title'},
        			{ name: 'director', title: 'Director' },
        			{ name: 'producer', title: 'Producer' },
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
			return apiURL.concat('films/').concat('?format=json&page=').concat(cPage);
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
                    <FilmsProvider value={{state:this.state, changeCurrentPage: this.changeCurrentPage}} >          
                        <FilmsContent />
                    </FilmsProvider>                 
                </div>      
			    );
		}
	}

export default Films;
