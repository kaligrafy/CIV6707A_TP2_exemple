import React from 'react';

class Survey extends React.Component
{
    constructor(props) // tout ce qui se passe à la création d'un survey
    {
        super(props);//appelle le constructeur du parent qui est react.component se qu'on fait tout le temps
        // d'autre truc qu'on veut faire faire au Survey
    }

    render() //fonction par défaut pour afficher le contenue de notre component
    { 
        return (
            <div>
                <p>allosss</p>

            </div>
        );
    }

}

export default Survey ; // permet d'exporter Survey