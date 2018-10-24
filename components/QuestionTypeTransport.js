import React from 'react';
import interview from '../object/Interview'

const Transport=[
    "Autobus",
    "Métro",
    "Train",
    "Automobile",
    "Autopartage",
    "Vélo",
    "Marche",
    "Autre"
]
class QuestionTypeTransport extends React.Component
{
    constructor(props) 
      {  super(props);
        this.state =
         {
           value : interview.TypeTransport
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
          
          <label>
          <p>Sélecionnez les types de transports que vous utilisez dans votre quotidien: </p>
          {Transport.map(function(Transport, index){
              return <label key={"label_for_" + index}>
                  {Transport}
                  <input onChange={this.handleInputChange} name="typetransport" type="checkbox" key={index} />    
              </label>
          }.bind(this))}
      </label> 
            
        )
    }

}

export default QuestionTypeTransport ; 