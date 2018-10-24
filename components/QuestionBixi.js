import React from 'react';
import interview from '../object/Interview'



class QuestionBixi extends React.Component
{   
    constructor(props) 
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

        
    handleChange(event)
    {
        if (event.stopPropagation)
        {
            event.stopPropagation();
        }
        this.props.handleQuestionChange('abonnementBixi', event.target.value);
    }

    render() 
    {         
        
        if (this.props.age === undefined || this.props.age < 14)
        {
            return null;
        }
        

        const value = this.props.abonnementBixi;

        return (

              <label>
               
                    Abonnement BIXI: 
                    <div className="radio">
                    
                    <input id="bixi_oui" name="bixi" type="radio" value="oui" checked={value === 'oui'} onChange={this.handleChange} />
                    <label htmlFor="bixi_oui">
                    Oui
                    </label>
                    </div>

                    <div className="radio">
                    <input id="bixi_non" name="bixi" type="radio" value="non" checked={value === 'non'} onChange={this.handleChange} />
                    <label htmlFor="bixi_non">
                        Non
                    </label>
                    </div>
                    </label>
                )

        }
    }
               
export default QuestionBixi; 