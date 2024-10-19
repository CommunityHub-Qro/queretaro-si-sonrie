"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
  });
  const center = useMemo(
    () => ({ lat: 20.587005124228323, lng: -100.40740088066273 }),
    [],
  );

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ width: "100%", height: "700px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
