import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SpeciesDetails extends Component
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
                                <td><b>Classification: </b></td>
                                <td> {result.classification}</td>                         
                              </tr>                              
                              <tr>
                                <td><b>Designation: </b></td>
                                <td> {result.designation}</td>                         
                              </tr>                                 
                              <tr>
                                <td><b>Average height: </b></td>
                                <td> {result.average_height}</td>                         
                              </tr>
                              <tr>
                                  <td><b>Skin colors: </b></td>
                                  <td> {result.skin_colors}</td>
                              </tr>
                              <tr>
                                  <td><b>Hair colors: </b></td>
                                  <td> {result.hair_colors}</td>
                              </tr>
                              <tr>
                                  <td><b>Eye_colors: </b></td>
                                  <td> {result.eye_colors}</td>
                              </tr>
                              <tr>
                                  <td><b>Average lifespan: </b></td>
                                  <td> {result.average_lifespan}</td>
                              </tr>
                              <tr>
                                  <td><b>Homeworld: </b></td>
                                  <td> {result.homeworld}</td>
                              </tr>
                              <tr>
                                  <td><b>Language: </b></td>
                                  <td> {result.language}</td>
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
        return 'https://swapi.co/api/species/?search=' + id;
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

export default SpeciesDetails;