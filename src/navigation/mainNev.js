import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from "../screens/signup/signup";
import Login from "../screens/login/login";
import { Splash } from "../screens/splash/splash";
import Main from "../screens/main/main";
import { Ionicons } from "@expo/vector-icons";
import WebPage from "../screens/webview/webpage";
function MainNev() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Home = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={route.name === "Home" ? "home" : "person"}
            color={focused ? "red" : "grey"}
            size={18}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="web" component={WebPage} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="main" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { MainNev };
