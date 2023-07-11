import React, { useEffect, useRef } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { chargingPoints } from "../Data";
const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(mapContainerRef.current).setView(
      [12.9658, 77.6037],
      15
    );

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
      maxZoom: 20,
    }).addTo(map);

    addMarkersToMap(map);

    return () => {
      map.remove();
    };
  }, []);

  const addMarkersToMap = (map) => {
    for (const chargingPoint of chargingPoints) {
      const marker = Leaflet.marker(
        [chargingPoint.latitude, chargingPoint.longitude],
        {
          icon: Leaflet.icon({
            iconUrl:
              "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          }),
        }
      ).addTo(map);

      marker.bindTooltip(chargingPoint.name, {
        permanent: false,
        direction: "top",
      });
    }
  };

  return <div ref={mapContainerRef} style={{ height: "500px" }}></div>;
};

export default Map;
