import { Restaurants } from "./components/restaurants/restaurants";
import { RestaurantsResponse } from "./restaurants";

const getRestaurants = async () => {
  const data: RestaurantsResponse[] = await fetch(
    "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json",
    { cache: "no-store" } // SSR
  ).then((res) => res.json());

  return data;
};

export default async function Home() {
  const restaurants = await getRestaurants();
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Restaurants restaurants={restaurants} />
        </div>
      </div>
    </>
  );
}
