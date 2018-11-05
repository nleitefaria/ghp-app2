import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';

const URL = 'https://swapi.co/api/people/';

class People extends Component 
{
	constructor(props)
	{
		super(props);
        this.state = {
        		//error: null,
        		//isLoaded: false,
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
		//loading: true,
		currentPage: currentPage,
		});
	}

	queryString()
	{
		const { currentPage } = this.state;
		var cPage = Number(currentPage) + 1;
		return URL + '?format=json&page=' + cPage;
	}

	loadData()
	{
		const queryString = this.queryString();
		if (queryString === this.lastQuery) {
			//this.setState({ loading: false });
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
		
			const { rows, columns, pageSize, currentPage, totalCount } = this.state;
	
			return (
			      <div>	      	      	      			      	
			      	<Breadcrumb>
		      			<BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
		      			<BreadcrumbItem active>People</BreadcrumbItem>
		      		</Breadcrumb>
		      	  	<br></br>
			      	<Card style={{ position: 'relative' }}>
  	        			<Grid rows={rows} columns={columns}>
  	        				<PagingState currentPage={currentPage} onCurrentPageChange={this.changeCurrentPage} pageSize={pageSize} />
  	        					<CustomPaging totalCount={totalCount} />
  	          						<Table/>
  	          							<TableHeaderRow />
  	          								<PagingPanel />
  	          		</Grid>
  	          		</Card>		   
			      </div>
			    );
		}	 
	}
	 
export default People;