import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";

const sortRestaurantsByRating = (
  restaurants: RestaurantsResponse[],
  descending: boolean = false,
) => {
  if (descending) {
    return [...restaurants].sort((a, b) => b.rating - a.rating);
  } else {
    return [...restaurants].sort((a, b) => a.rating - b.rating);
  }
};
const sortRestaurantsByName = (
  restaurants: RestaurantsResponse[],
  descending: boolean = false,
) => {
  if (descending) {
    return [...restaurants].sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
  }
};

export { sortRestaurantsByRating, sortRestaurantsByName };
