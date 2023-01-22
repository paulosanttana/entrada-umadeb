import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Qrcode } from "../screens/Qrcode";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Entrada" component={Home} />

      <Screen name="QRCode" component={Qrcode} />
    </Navigator>
  );
}
