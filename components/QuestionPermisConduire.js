import React from 'react';
import interview from '../object/Interview'
 class QuestionPermisConduire extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value: interview.AbonnementPermisConduire};
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
               
                    Possédez-vous un permis de conduire ? 
                    <br/>
                    
                        <label>
                            <input name="permisConduire" type="radio" value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur}/>
                            Oui
                        </label>
                  
                </label>
                )
        }
    }
               
export default QuestionPermisConduire;  