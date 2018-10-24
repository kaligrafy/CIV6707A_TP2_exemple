import React from 'react';
import interview from '../object/Interview'

const Activite=[
  "Travail",
  "Etudes",
  "Magasinage",
  "Retour au foyer",
  "Autre"
]
class QuestionTypeActivite extends React.Component
{
    constructor(props) 
      {  
        super(props);
        this.state = {
           value: "Etudes"
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          
          <div>
            <p>Sélectionnez les motifs de vos déplacements : </p>
          {Activite.map(function(activite, index){
              return <div key={index}>
                  <input value={activite} onChange={this.handleInputChange} checked={activite === this.state.value} name="typeactivite" type="checkbox" key="index" />    
                  <label>{activite}</label>
              </div>
          }.bind(this))}
          </div>  
        )
    }

}

export default QuestionTypeActivite ; 