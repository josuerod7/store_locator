import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Definir la interfaz para una tienda
interface Store {
  name: string;
  lat: number;
  lng: number;
  address: string;
}

// Definir las propiedades que espera el componente
interface MapProps {
  stores: Store[];
}

const stores: Store[] = [
  { name: "Santa Fe Mall", lat: 6.2425105, lng: -75.6215348, address: "Poblado, Medellin" },
  { name: "Centro Comercial Oviedo", lat: 6.1988271, lng: -75.5767079, address: "Poblado, Medellin" },
  // Añade más tiendas según sea necesario
];

const Map: React.FC<MapProps> = ({ stores }) => {
  return (
    <MapContainer center={[6.2337736, -75.6107709]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stores.map((store, index) => (
        <Marker key={index} position={[store.lat, store.lng]}>
          <Popup>
            {store.name} <br /> {store.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Map stores={stores} />
    </div>
  );
};

export default App;
