import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  adoptionApplicationCard: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 20,
  },
  imagePet: {
    width: 100,
    height: 100,
    borderRadius: 25,
    margin: 10,
  },
  informationContainer: {
    margin: 10,
  },
  titleCard: {
    fontSize: 20,
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
  },
  statusContainer: {
    backgroundColor: '#008000',
    borderRadius: 25,
    padding: 4,
    width: 100,
    alignItems: 'center',
  },
  statusTitle: {
    fontFamily: theme.fonts.MEDIUM,
    color: '#ffffff',
  },
});

export default styles;
