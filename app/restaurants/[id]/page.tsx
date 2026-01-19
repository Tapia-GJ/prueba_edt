import { getAllRestaurants } from "@/services/restaurants";
import RestaurantDetails from "@/components/restaurants/RestaurantDetails";
import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";

export async function generateStaticParams() {
    const restaurants: RestaurantsResponse[] = await getAllRestaurants();
    return restaurants.map(r => ({ id: r.id.toString() }));
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;

    const restaurants = await getAllRestaurants();
    const restaurant =
        restaurants.find(r => r.id.toString() === id) ?? null;

    if (!restaurant) {
        return <div className="p-10 text-center">Restaurant not found</div>;
    }

    return <RestaurantDetails restaurant={restaurant} />;
}
