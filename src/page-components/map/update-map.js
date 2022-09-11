import { useMap } from "react-leaflet";

export default function UpdateMap({ coords }) {
    const map = useMap();
    map.setView(coords,  map.getZoom());
  
    return null;
}