import React, { Component } from 'react';
import { FilmsConsumer } from "../../context/FilmsContext";

import { Breadcrumb, BreadcrumbItem, Card, Row, Col} from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import Loading from '../Loading';

var divLoading =
{
    'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};


class FilmsContent extends Component
{
	render()
	{			
			return (
			      <div>
			        <FilmsConsumer>
			        {
			            (context)=>
		                    <React.Fragment>
			            <Breadcrumb>
                        <BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Films</BreadcrumbItem>
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
			        </FilmsConsumer>
			      </div>
			    );
		}
	}

export default FilmsContent;
