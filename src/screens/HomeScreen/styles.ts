import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
  },
  titleCategory: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TESTE,
    fontSize: 20,
    padding: 20,
    paddingBottom: 0,
  },

  containerScrollView: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
    paddingLeft: 0,
  },
  contentContainerScrollView: {
    flexGrow: 1,
    padding: 20,
  },
});

export default styles;
