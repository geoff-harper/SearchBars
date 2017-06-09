import React from 'react'
import scriptLoader from 'react-async-script-loader'

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyB2u76SQ9A2VQgCKmbpwMCMp1vGETLNxCg'])
class BarMap extends React.Component {
  constructor(props) {
    super(props);

    this.map = null;
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.map = new google.maps.Map(this.refs.map, {
          center: {lat: this.props.lat, lng: this.props.long},
          zoom: 15
        });

        const marker = new google.maps.Marker({
          position: {lat: this.props.lat, lng: this.props.long},
          map: this.map,
          title: this.props.name
        });
      }
    }
  }

  render(){
    return (
      <div className="map-container">
        <div className="map" ref="map"></div>
        { !this.map && <div className="center-md">Loading...</div> }
      </div>
    )
  }
}

export default BarMap
