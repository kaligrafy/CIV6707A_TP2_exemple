import React from 'react';
import interview from '../object/Interview'




class QuestionCourriel extends React.Component
{
  constructor(props) 
  {
      super(props);
      this.state = {value :  interview.Courriel} 
      this.handleChange = this.handleChange.bind(this);
    }
      handleChange(event)
      {
          event.preventDefault();
          this.setState({value:event.target.value});
      }
      

  render() 
  { 
      return (
          <div className="question">
              <label>
                  Adresse courriel : {" "}
              </label>    
              <input type="text" name="courriel" value={this.state.value} onChange={this.handleChange}/>
          </div>
      );
  }

}

export default QuestionCourriel ; 
