import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HOME, ISLAND } from "../constant/constant";

// UI SCREEN
import Home from "../screens/Home";
import Islands from "../screens/Islands";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={HOME}
          component={Home}
        />
        <Stack.Screen name={ISLAND} component={Islands} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
