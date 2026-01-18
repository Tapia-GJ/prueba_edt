import { RestaurantsResponse } from "@/app/restaurants"
import { Star } from "lucide-react";

interface RestaurantCardProps {
    restaurant: RestaurantsResponse;
}
export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
    const { name, rating, contact, address } = restaurant;
    return (
        <>
            <div className="flex items-start justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">

                <div className="flex items-center gap-4">
                    <div>
                        <h3 className="font-medium text-lg">
                            {name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {address.street}, {address.city}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-yellow-600 mt-1">
                            Contact us: <span>{contact.phone}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-primary text-white font-semibold px-4 py-1 rounded-lg text-sm flex gap-2">
                    <Star className="w-4 h-4" /> {rating}
                </div>
            </div>

        </>
    )
}
