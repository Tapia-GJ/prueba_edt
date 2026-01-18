import { RestaurantsResponse } from "@/app/restaurants";
import Fuse from "fuse.js";

const options = {
  includeScore: true,
  keys: ["name"],
};

export const searchRestaurants = (
  restaurants: RestaurantsResponse[],
  searchTerm: string,
) => {
  const fuse = new Fuse(restaurants, options);
  const result: RestaurantsResponse[] = fuse
    .search(searchTerm)
    .map((item) => item.item);
  return result;
};
