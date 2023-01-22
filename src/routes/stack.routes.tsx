import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Qrcode } from "../screens/Qrcode";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" options={{ headerShown: false }} component={Home} />

      <Screen
        name="Qrcode"
        options={{
          title: "Scanear QR Code",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#00337C" },
        }}
        component={Qrcode}
      />
    </Navigator>
  );
}
