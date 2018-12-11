import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Row, Col} from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import { SpeciesConsumer } from "../../context/SpeciesContext";
import Loading from '../Loading';

var divLoading =
{
	'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

class SpeciesContent extends Component
{
	render()
	{			
			return (
			      <div>
			        <SpeciesConsumer>
			        {
			            (context)=>
		                    <React.Fragment>
		                    <br></br>		             
		                        <Breadcrumb>
	                                <BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
	                                <BreadcrumbItem active>Species</BreadcrumbItem>
	                            </Breadcrumb>
	                            <br></br>
	                            <Row>
	                                <Col xs="6"><div style={divLoading}>{context.state.loading && <Loading />}</div></Col>
	                            </Row>
	                            <Card style={{ position: 'relative' }}>
	                                <Grid rows={context.state.rows} columns={context.state.columns}>
	                                    <PagingState currentPage={context.state.currentPage} onCurrentPageChange={context.changeCurrentPage} pageSize={context.state.pageSize} />
	                                        <CustomPaging totalCount={context.state.totalCount} />
	                                            <Table/>
	                                                <TableHeaderRow />
	                                                    <PagingPanel />
	                                </Grid>
	                            </Card>	                  
	                      </React.Fragment>
	                }
			        </SpeciesConsumer>
			      </div>
			    );
		}
	}

export default SpeciesContent;
