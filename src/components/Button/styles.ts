import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 56,
    alignContent: 'center',
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.PRIMARY,
  },
  title: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: 14,
    color: theme.colors.SHAPE,
    lineHeight: 18
  },
  primary: {
    backgroundColor: theme.colors.PRIMARY,
  },
  secondary: {
    backgroundColor: theme.colors.SECONDARY,
  },
  danger: {
    backgroundColor: theme.colors.DANGER,
  },
});

export default styles;