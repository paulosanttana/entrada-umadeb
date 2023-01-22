import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { Qrcode } from "../screens/Qrcode";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "grey",
        headerShown: false, //desabilita visualização do texto em todas as paginas
        tabBarStyle: { backgroundColor: "#021838" },
      }}
    >
      <Screen
        name="Entrada"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
