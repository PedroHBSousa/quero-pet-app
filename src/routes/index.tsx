import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PublicRoutes} from './public.routes';
import {PrivateRoutes} from './private.routes';
import {AuthContext} from '../contexts/AuthContext';

export default function Routes() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
