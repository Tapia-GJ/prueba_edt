"use client";
import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapView"), { ssr: false });
interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
}
export default function MapClient({ restaurants }: RestaurantsProps) {
    return <Map restaurants={restaurants} />;
}
