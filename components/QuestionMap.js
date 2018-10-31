import React from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";

class QuestionMap extends React.Component
{
  constructor(props) 
  {
    super(props);
    this.state = {value: props.geography} 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(map, event)
  {
    console.log('click sur carte', event.lngLat);
    this.props.handleQuestionChange('geography', [event.lngLat.lng, event.lngLat.lat]);
  }

  render()
  {

    const Map = ReactMapboxGl({
      accessToken: MAPBOX_API_KEY
    });

    return (<Map 
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "400px",
        width: "100vw"
      }}
      onClick={this.handleChange}
      center={[-73.6,45.5]}
    >

    </Map>);
  }
  
}

export default QuestionMap;