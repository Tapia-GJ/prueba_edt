import ClientLayout from "@/components/ClientLayout";
import { getAllRestaurants } from "@/services/restaurants";

export default async function Page() {
    const restaurants = await getAllRestaurants();

    return <ClientLayout restaurants={restaurants} />;
}
