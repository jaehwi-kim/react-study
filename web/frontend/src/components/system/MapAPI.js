import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "350px",
  height: "250px",
};

const center = {
  lat: 37.567415,
  lng: 126.9864256,
};

const options = {
  zoomControl: true,
};

const MapAPI = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD2azuh9RPIrUV2--NISbqbOB8LGM0d818",
    libraries,
  });

  const [markers, setMarkers] = useState([
    {
      lat: center.lat,
      lng: center.lng,
      time: new Date(),
    },
  ]);

  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    /*navigator.geolocation.getCurrentPosition(
      (position) => {
        map.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        map.setZoom(18);
        setMarkers([
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            time: new Date(),
          },
        ]);
      },
      () => null
    );*/
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        mapTypeId={"satellite"}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>position {selected.lat + ", " + selected.lng}</p>
              <p>marked {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default MapAPI;
