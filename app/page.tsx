import { getAllRestaurants } from "@/services/restaurants";
import { Restaurants } from "@/components/restaurants/Restaurants";
// import { Map } from "@/components/maps/Map";

export default async function Home() {
  const restaurants = await getAllRestaurants();
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Restaurants restaurants={restaurants} />
        </div>
        <div className="col-span-8">
          chambeanding
          {/* <Map /> */}
        </div>
      </div>
    </>
  );
}
