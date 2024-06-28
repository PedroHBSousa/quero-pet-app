import {StatusBar, Text} from 'react-native';
import {Host} from 'react-native-portalize';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from './src/global/styles/theme';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.TESTE}
      />
      <Host>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Host>
    </GestureHandlerRootView>
  );
}

export default App;
