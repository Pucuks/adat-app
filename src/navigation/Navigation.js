import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WELCOME, HOME, ISLAND, DETAIL_ADAT } from "../constant/constant";

// UI SCREEN
import Home from "../screens/Home";
import Islands from "../screens/Islands";
import DetailAdat from "../screens/DetailAdat";
import WelcomeScreen from "../screens/WelcomScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={WELCOME}
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={HOME}
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ISLAND}
          component={Islands}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={DETAIL_ADAT}
          component={DetailAdat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
