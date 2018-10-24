import React from 'react';
import interview from '../object/Interview'

 const Sexe=[
            "",
            "Femme",
            "Homme",
            "Non binaire"
        ]
        const ChoixSexe = function(sexe,index){
            return <option key={index}>{sexe}</option>
        };


class QuestionSexe extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :  interview.Sexe} 
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
                Sexe:
                <select value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur} >{Sexe.map(ChoixSexe)},</select> 
            </label> 
        )    
    
    }

}

export default QuestionSexe ; 