import { ActivityIndicator, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { ThemeConsumer, ThemeProvider } from "styled-components";

import theme from "./src/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar />
        {/* { fontLoaded ? <Home /> : ActivityIndicator} */}
        <Home />
      </ThemeProvider>
    </>
  );
}
