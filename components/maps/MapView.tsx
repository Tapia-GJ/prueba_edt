"use client";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
// Nuevas importaciones necesarias
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin, Star } from "lucide-react";
import L from "leaflet";

import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import { useMemo, useRef, useState } from "react";

interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
}

const createCustomIcon = () => {
    const iconHtml = renderToStaticMarkup(
        <MapPin size={32} color="#ef4444" fill="white" strokeWidth={2} />
    );

    return L.divIcon({
        html: iconHtml,
        className: "custom-leaflet-icon",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -34],
    });
};

export default function MapView({ restaurants }: RestaurantsProps) {
    const position = {
        lat: 19.440057053713137,
        lng: -99.12704709742486,
    };
    const [positionMarker, setPositionMarker] = useState(position);
    const markerRef = useRef<L.Marker>(null);
    const customMarkerIcon = createCustomIcon();
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    const newPos: LatLngExpression = marker.getLatLng();
                    setPositionMarker(newPos);
                }
            },
        }),
        []
    );
    return (
        <div className="w-full h-screen max-w-screen">
            <style jsx global>{`
          .custom-leaflet-icon {
            background: transparent !important;
            border: none !important;
          }
        `}</style>

            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    draggable={true}
                    eventHandlers={eventHandlers}
                    position={positionMarker}
                    ref={markerRef}
                    icon={new L.Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })}
                >
                </Marker>
                {restaurants.map((place) => (
                    <Marker
                        key={place.id}
                        position={[place.address.location.lat, place.address.location.lng]}
                        icon={customMarkerIcon}
                    >
                        <Popup>
                            <div className="text-sm gap-y-2">
                                <h3 className="text-lg">{place.name}</h3>
                                <p className="flex gap-2 items-center text-yellow-500"><Star></Star> Rating: {place.rating}</p>
                                <p>{place.address.street}, {place.address.city}</p>
                                <p>{place.contact.phone}</p>
                                <p>{place.contact.email}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
