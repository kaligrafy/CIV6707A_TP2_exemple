import React from 'react';
import interview from '../object/Interview'

class QuestionQuestions extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :  interview.Question} 
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
                    Questions : 
                    <br/>
                    <textarea name="question" value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur}/>
                </label> 
               
        );
    }

}

export default QuestionQuestions ; 