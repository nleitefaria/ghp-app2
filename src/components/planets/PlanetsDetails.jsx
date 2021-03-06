import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PlanetsDetails extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        modal: false,
        results: []
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle()
    {
        this.loadData(this.props.id);      
        this.setState({
            modal: !this.state.modal
        });

        
        if(this.state.modal === false)
        {
          this.loadData(this.props.id);
        }
    }

    componentDidMount()
    {
    }
    
    loadData(id)
    {
        const queryString = this.queryString(id);
        if (queryString === this.lastQuery) {
          this.setState({ loading: false });
          return;
        }

        fetch(queryString)
          .then(response => response.json())
          .then(data => this.setState({
              results: data.results.map((result, i) => (
                      <div>                                                
                          <table>                         
                              <tr>
                                <td><b>Name:</b> </td>
                                <td> {result.name}</td>                            
                              </tr>
                              <tr>
                                <td><b>Rotation period: </b></td>
                                <td> {result.rotation_period}</td>
                              </tr>                              
                              <tr>
                                <td><b>Orbital period: </b></td>
                                <td> {result.orbital_period}</td>
                              </tr>                                 
                              <tr>
                                <td><b>Diameter: </b></td>
                                <td> {result.diameter}</td>
                              </tr>
                              <tr>
                                  <td><b>Climate: </b></td>
                                  <td> {result.climate}</td>
                              </tr>
                              <tr>
                                  <td><b>Gravity: </b></td>
                                  <td> {result.gravity}</td>
                              </tr>
                              <tr>
                                  <td><b>Terrain: </b></td>
                                  <td> {result.terrain}</td>
                              </tr>
                              <tr>
                                  <td><b>Surface_water: </b></td>
                                  <td> {result.surface_water}</td>
                              </tr>
                              <tr>
                                  <td><b>Population: </b></td>
                                  <td> {result.population}</td>
                              </tr>
                          </table>
                      </div>
                    ))
                  }))
          .catch(() => this.setState({ loading: false }));
        this.lastQuery = queryString;
    }
    
    queryString(id)
    {    
        return 'https://swapi.co/api/planets/?search=' + id;
    }

    render()
    {
      return (
        <div>
          <Button color="primary" size="sm" onClick={this.toggle}>Details</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          <ModalHeader toggle={this.toggle}><b>{this.props.id}'s details</b></ModalHeader>
          <ModalBody>
            <br></br>
            <div>                 
                  {this.state.results}                 
            </div>
            <br></br>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
          </Modal>
          </div>
      );
    }
}

export default PlanetsDetails;