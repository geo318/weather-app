import './map.css';
import { MapContainer, Marker, ZoomControl, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import UpdateMap from './update-map';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export default function Map({coords}) {
    const position = [coords.lat,coords.lon]
    return (
        <div className='map-wrapper'>
            { 
                coords.lat &&
                <MapContainer zoomControl={false} center={position} zoom={11} scrollWheelZoom={false}>
                    <TileLayer url="https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=IdkxbfGgtcZTuLlkuprf" />
                    <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
                    <UpdateMap coords={position} />
                    <ZoomControl position="topright"/>
                </MapContainer>
            }
            <div className='map-overlay'/>
        </div>
    )
}