"use client";
import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapView"), { ssr: false });
interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
    meters: number;
}
export default function MapClient({ restaurants, meters }: RestaurantsProps) {
    return (
        <>
            <Map restaurants={restaurants} meters={meters} />
        </>
    );
}
