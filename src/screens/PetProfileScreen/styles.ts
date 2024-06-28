import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
  },
  imagePetProfile: {
    width: '100%',
    height: 400,
    alignSelf: 'center',
  },
  informationContainer: {
    padding: 20,
    backgroundColor: theme.colors.BACKGROUND,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    position: 'relative',
  },
  infomartionItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  informationItem: {
    backgroundColor: theme.colors.BACKGROUND,
    padding: 12,
    borderWidth: 2,
    borderColor: theme.colors.GREY_LIGHT,
    borderRadius: 15,
    width: '23%',
    alignItems: 'center',
  },
  titleItem: {
    fontSize: 14,
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TESTE,
  },
  locationInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 15,
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.TESTE,
    marginLeft: 5,
  },
  subtitleItem: {
    fontSize: 13,
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.TESTE,
  },
  namePetProfile: {
    fontSize: 25,
    fontFamily: theme.fonts.BOLD,
    color: theme.colors.TESTE,
    marginTop: 20,
  },
  descriptionPet: {
    fontSize: 16,
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.TESTE,
    marginTop: 20,
  },
  uploadContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: theme.colors.TESTE,
    backgroundColor: theme.colors.BACKGROUND,
  },
  titleUpload: {
    fontSize: 13,
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.TESTE,
    marginTop: 10,
  },
  titleModalize: {
    fontSize: 15,
    fontFamily: theme.fonts.MEDIUM,
    color: theme.colors.TESTE,
  },
});

export default styles;
