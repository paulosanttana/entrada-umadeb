import { NavigationContainer } from "@react-navigation/native";
// import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "../routes/tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
      {/* <StackRoutes /> */}
    </NavigationContainer>
  );
}
