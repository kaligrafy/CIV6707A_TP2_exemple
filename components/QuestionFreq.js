import React from 'react';
import interview from '../object/Interview'



class QuestionFreq extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :interview.FrequenceUtilisation} 
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
                    Fréquence d'utilisation : 
                    <br/>
                    <input id="typeinp" type="range" min="0" max="5" defaultValue={interview.FrequenceUtilisation} step="1"/>
                    
                   </label>
                   )

        }
    }
               
export default QuestionFreq; 