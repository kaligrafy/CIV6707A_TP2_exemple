import React from 'react';

class Bus extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    render() 
    { 
        return (
            <div>
                <p> 
                    Bus: 
                    <img className ="petite" src = {this.props.bus.imageUrl} alt= "Image d'autobus" />
                </p>
                <p>
                    Immatriculation : 
                    {this.props.bus.immatriculation}
                </p>
               
            </div>
        );
    }

}

export default Bus ; // permet d'exporter Survey