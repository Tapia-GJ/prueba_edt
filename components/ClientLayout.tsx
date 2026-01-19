"use client";

import { useState } from "react";
import { Restaurants } from "@/components/restaurants/Restaurants";
import MapClient from "@/components/maps/MapClient";
import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";

interface Props {
    restaurants: RestaurantsResponse[];
}

export default function ClientLayout({ restaurants }: Props) {
    const [meters, setMeters] = useState(100);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7">
                <Restaurants
                    restaurants={restaurants}
                    meters={meters}
                    setMeters={setMeters}
                />
            </div>
            <div className="col-span-12 md:col-span-5">
                <MapClient restaurants={restaurants} meters={meters} />
            </div>
        </div>
    );
}
