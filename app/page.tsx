import { getAllRestaurants } from "@/services/restaurants";
import { Restaurants } from "@/components/restaurants/Restaurants";
import MapClient from "@/components/maps/MapClient";
export default async function Home() {
  const restaurants = await getAllRestaurants();
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <Restaurants restaurants={restaurants} />
        </div>
        <div className="col-span-12 md:col-span-5">
          <MapClient restaurants={restaurants} />
        </div>
      </div>
    </>
  );
}
