import React from 'react';
import interview from '../object/Interview'




class QuestionNom extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :  interview.Nom} 
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
        return (
                
                <label>
                    Nom : {" "}
                    <ion-icon name="arrow-round-forward" />
                    <input type="text" name="nom" value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur}/>
                    
                </label> 
        );
    }

}

export default QuestionNom ; 
