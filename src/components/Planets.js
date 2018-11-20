import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Row, Col } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import Loading from './Loading';

const apiURL = 'https://swapi.co/api/';

var divLoading =
{
	'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

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
        			{ name: 'gravity', title: 'Gravity' }
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
			const { rows, columns, pageSize, currentPage, totalCount, loading } = this.state;
			return (
			      <div>
			      	<Breadcrumb>
		      			<BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
		      			<BreadcrumbItem active>People</BreadcrumbItem>
		      		</Breadcrumb>
		      	  	<br></br>
								<Row>
										<Col xs="6"><div style={divLoading}>{loading && <Loading />}</div></Col>
								</Row>
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

export default Planets;
