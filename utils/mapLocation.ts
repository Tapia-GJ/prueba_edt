import { RestaurantsResponse } from "@/app/restaurants";

function isPointInRadius(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number,
): boolean {
  const R = 6371000; // Radio de la Tierra en metros

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance <= radius;
}

export function restaurantsInCircle(
  restaurants: RestaurantsResponse[],
  center: { lat: number; lng: number },
  radius: number,
) {
  return restaurants.filter((r) =>
    isPointInRadius(
      center.lat,
      center.lng,
      r.address.location.lat,
      r.address.location.lng,
      radius,
    ),
  );
}
