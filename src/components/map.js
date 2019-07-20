import React, { Component } from "react";
import MediaQuery from "react-responsive";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

export default class ModalMap extends Component {
  render() {
    function map() {
      return (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 47.010452, lng: 28.86381 }}
        >
          <Marker position={{ lat: 47.031871, lng: 28.830755 }}>
            <InfoWindow>
              <div className="info-window-text">Central Office</div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      );
    }
    const WrappedMap = withScriptjs(withGoogleMap(map));
    return (
      <div className="react-google-map">
        <MediaQuery query="(max-device-width: 700px)">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBswg-99qFUpeGHZVj62T7eI_uOADHjzQc`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `150px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 701px)">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBswg-99qFUpeGHZVj62T7eI_uOADHjzQc`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MediaQuery>
      </div>
    );
  }
}
