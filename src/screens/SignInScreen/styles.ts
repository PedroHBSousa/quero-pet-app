import {StyleSheet} from 'react-native';

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
  },
  svgLogo: {
    resizeMode: 'contain',
    marginTop: 100,
    left: -15,
  },
  textPassword: {
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.TEXT,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  svgSignUp: {
    position: 'absolute',
    top: 560,
    left: 0,
  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    marginBottom: 50,
    top: -50,
  },
  containerView: {
    flex: 1,
    width: '100%',
    padding: 25,
  },
});

export default styles;
