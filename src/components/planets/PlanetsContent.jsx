import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Row, Col } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import Loading from '../Loading';
import { PlanetsConsumer } from "../../context/PlanetsContext";
import PlanetsDetails from "../planets/PlanetsDetails";

var divLoading =
{
	'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

const ActionCell = ({ id }) => (
    <Table.Cell>
             <span>
                 <PlanetsDetails id={id}/>
              </span>
    </Table.Cell>
);

const Cell = (props) => {
    const { column, row } = props;
    if (column.name === 'action') {
        return <ActionCell  id={row.name} />;
    }
    return <Table.Cell {...props} />;
};

class PlanetsContent extends Component
{
		render()
		{
			return (
			        <div>
                    <PlanetsConsumer>
                    {
                        (context)=>
                            <React.Fragment>
								<Breadcrumb>
		      						<BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
		      						<BreadcrumbItem active>Planets</BreadcrumbItem>
		      					</Breadcrumb>
		      	  				<br></br>
								<Row>
                    				<Col xs="6"><div style={divLoading}>{context.state.loading && <Loading />}</div></Col>
                						</Row>
			      							<Card style={{ position: 'relative' }}>
  	        									<Grid rows={context.state.rows} columns={context.state.columns}>
  	        										<PagingState currentPage={context.state.currentPage} onCurrentPageChange={context.changeCurrentPage} pageSize={context.state.pageSize} />
  	        											<CustomPaging totalCount={context.state.totalCount} />
                                                    		<Table cellComponent={Cell}/>
                                                    			<TableHeaderRow />
  	          														<PagingPanel />
  	          									</Grid>
  	          								</Card>
		      			</React.Fragment>
                    }
                    </PlanetsConsumer>
                  </div>
			    );
		}
	}

export default PlanetsContent;
