import { RestaurantsResponse } from "@/app/restaurants/interfaces/restaurants-response";

export async function getAllRestaurants(): Promise<RestaurantsResponse[]> {
  const data: RestaurantsResponse[] = await fetch(
    "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json",
  ).then((res) => res.json());

  return data;
}

export async function getRestaurantsById(
  id: string,
): Promise<RestaurantsResponse | null> {
  const data = await getAllRestaurants();
  return data.find((item) => item.id === id) || null;
}
