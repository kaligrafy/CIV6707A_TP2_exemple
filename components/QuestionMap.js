import React from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";

console.log(MAPBOX_API_KEY);

class QuestionMap extends React.Component
{
  constructor(props) 
  {
    super(props);
    this.state = {value: props.geography} 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    event.preventDefault();
    this.props.handleQuestionChange('geography', event.target.value);
  }

  render()
  {
    return null;
  }
  
}

export default QuestionMap;