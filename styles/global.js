import { StyleSheet } from "react-native";
import { colors, fonts } from "./constants";

const styles = StyleSheet.create({
  container: {},
  textBold: {},
  textRegular: {},
  button: {
    width: 250,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: colors.lightbg,
  },
  buttonText: {
    fontFamily: fonts.semibold,
    fontSize: 14
  }
})

export default styles