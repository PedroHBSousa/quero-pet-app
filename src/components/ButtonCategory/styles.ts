import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    backgroundColor: '#073B4C',
    elevation: 5,
  },
  textButton: {
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TESTE,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default styles;
