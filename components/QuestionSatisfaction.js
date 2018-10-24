import React from 'react';
import interview from '../object/Interview'



class QuestionSatisfaction extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :interview.NiveauSatisfaction} 
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
                    Indiquez votre niveau de satsifaction vis-à-vis cette enquête d'origine et destination: 
                    <br/>
                  
                    <input name= "Satisfaction" id="typeinp" type="range" min="0" max="5"  step="1" defaultValue={interview.Satisfaction} style={{width: '100%'}}/>
                    <p style={{float: 'left'}}>Pas du tout</p><p style={{float: 'right'}}>Beaucoup</p>
                    <p style={{clear: 'both'}}></p>
                   </label>

                   )

        }
    }
               
export default QuestionSatisfaction; 