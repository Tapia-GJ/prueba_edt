"use client";
import {
    Circle,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
// Nuevas importaciones necesarias
import { Star } from "lucide-react";
import L from "leaflet";
import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import { useMemo, useRef, useState } from "react";
import { average, standardDeviation } from "@/utils/statistics";
import { restaurantsInCircle } from "@/utils/mapLocation";
interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
    meters: number;
}
export default function MapView({ restaurants, meters }: RestaurantsProps) {
    const radius = meters;
    const position = {
        lat: 19.43740,
        lng: -99.12936,
    };
    const [positionMarker, setPositionMarker] = useState(position);
    const markerRef = useRef<L.Marker>(null);
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
    const restaurantsInRadius = useMemo(
        () => restaurantsInCircle(restaurants, positionMarker, radius),
        [restaurants, positionMarker, radius],
    );
    const ratings = restaurantsInRadius.map(r => r.rating);
    const avg = ratings.length ? average(ratings).toFixed(2) : "N/A";
    const std = ratings.length ? standardDeviation(ratings).toFixed(2) : "N/A";
    return (
        <div className="w-full h-screen max-w-screen relative">
            <div className="absolute top-4 left-1/2 z-1000 bg-white p-4 rounded-xl shadow-lg text-sm w-72 overflow-y-auto">

                <h3 className="text-lg mb-2">{radius}m</h3>

                <p>Restaurants: {restaurantsInRadius.length}</p>
                <p>Avg Rating: {avg}</p>
                <p>Std Dev: {std}</p>
                <div className="mt-2 max-h-20">
                    <p>{restaurantsInRadius.map(r => r.name).join(", ")}</p>
                </div>
            </div>

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
                        iconUrl: 'https://images.icon-icons.com/317/PNG/512/map-marker-icon_34392.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })}

                >
                    <Circle
                        center={positionMarker}
                        radius={radius}
                    />
                </Marker>
                {restaurants.map((place) => (
                    <Marker
                        key={place.id}
                        position={[place.address.location.lat, place.address.location.lng]}
                        icon={new L.Icon({
                            iconUrl: 'https://images.icon-icons.com/916/PNG/512/Marker_icon-icons.com_71852.png',
                            iconSize: [25, 41],
                        })
                        }
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
