import {StatusBar, Text} from 'react-native';
import {Host} from 'react-native-portalize';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from './src/global/styles/theme';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {PetProvider} from './src/contexts/PetContext';
import {RootSiblingParent} from 'react-native-root-siblings';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootSiblingParent>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.TESTE}
        />
        <Host>
          <AuthProvider>
            <PetProvider>
              <Routes />
            </PetProvider>
          </AuthProvider>
        </Host>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
}

export default App;
