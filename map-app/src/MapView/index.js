import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const indiaCenter= [20.5937, 78.9629]; // Coordinates for India
  const zoomLevel = 5;
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [0, -41], 
  });
  return (
    <div className="map-container">
      <h1>India Map</h1>
      <MapContainer center={indiaCenter} zoom={zoomLevel} style={{ width: '100%', height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={indiaCenter} icon={customIcon}>
          <Popup>
            India is here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;