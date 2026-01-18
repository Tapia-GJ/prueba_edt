"use client";

import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
}

export const Restaurants = ({ restaurants }: RestaurantsProps) => {

    return (
        <aside className="w-full h-screen bg-white border-r border-gray-200 p-6 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-2 text-yellow-500 text-center">Melp</h1>
            <h2 className="text-2xl font-bold mb-6  text-center">
                Find a restaurant near you
            </h2>

            <div>
                <input type="text" />
            </div>

            <div className="flex flex-col gap-4">
                {restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </aside>
    );
};
