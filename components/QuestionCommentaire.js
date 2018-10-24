import React from 'react';
import interview from '../object/Interview'

class QuestionCommentaire extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value :  interview.Commentaire} 
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
                    Commentaire : 
                    <br/>
                    <textarea name="commentaire" value={this.state.value} onChange={this.handleChange} onBlur={this.handleblur} />
                </label>
               
        );
    }

}

export default QuestionCommentaire ; 