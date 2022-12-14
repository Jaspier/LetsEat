import camelize from "camelize";
export const restaurantsRequest = (location) => {
  return fetch(
    `http://localhost:5001/letseat-bd251/us-central1/placesNearby?location=${location}`
  ).then((res) => res.json());
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
