import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restuarants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
