import { StatusBar, Text } from "react-native";
import theme from './src/global/styles/theme';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Routes from "./src/routes";
import { View } from "react-native";


function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.PRIMARY}
      />
      <Routes />
    </GestureHandlerRootView>
  );
}

export default App;
