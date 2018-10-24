import React from 'react';
import interview from '../object/Interview'

 const Statut=[
            "",
            "Résident permanent",
            "Citoyen Canadien",
            "Permis de travail/étude"
        ]
        const ChoixStatut = function(statut,index){
            return <option key={index}>{statut}</option>
        };


class QuestionStatut extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :  interview.Statut} 
        this.handleChange = this.handleChange.bind(this);
        this.handleblur = this.handleblur.bind(this);
      }
        handleblur(event)
        {
            event.preventDefault();
            this.setState({value:event.target.value});
        }
        
        handleChange(event)
        {
            event.preventDefault();
            this.setState({value: event.target.value}); 
        }

   

    render() 
    { 
       
 
        return(
            <label>
                Statut:
                <select value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur} >{Statut.map(ChoixStatut)},</select> 
            </label> 
        )    
    
    }

}

export default QuestionStatut ; 