"use client";

import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";
import { RestaurantCard } from "@/components/restaurants/RestaurantCard";
import { useState } from "react";
import { searchRestaurants } from "@/utils/search";
import { sortRestaurantsByRating, sortRestaurantsByName } from "@/utils/sort";
import { Filter } from "@/components/Filter";
interface RestaurantsProps {
    restaurants: RestaurantsResponse[];
}

export const Restaurants = ({ restaurants }: RestaurantsProps) => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState({
        typeSelected: "",
        desc: true,
    });


    const filteredRestaurants = () => {
        let data = search ? searchRestaurants(restaurants, search) : restaurants;
        if (sort.typeSelected === "Rating") {
            data = sortRestaurantsByRating(data, sort.desc);

        }
        else if (sort.typeSelected === "Name") {
            data = sortRestaurantsByName(data, sort.desc);
        }
        return data;
    };


    return (
        <aside className="w-full h-screen bg-white border-r border-gray-200 p-6 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-2 text-yellow-500 text-center">Melp</h1>
            <h2 className="text-2xl font-bold mb-6  text-center">
                Find a restaurant near you
            </h2>
            <div className="flex gap-4 mb-2">
                <input type="text"
                    placeholder="Search for restaurants..."
                    className="w-full p-2 border-2 border-gray-200 rounded-lg"
                    value={search}
                    onChange={event => { setSearch(event.target.value); }}
                />
                <div className="flex gap-4">
                    <Filter sort={sort} setSort={setSort} setSearch={setSearch} />
                </div>

            </div>

            <div className="flex flex-col gap-4">
                {filteredRestaurants().map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </aside>
    );
};
