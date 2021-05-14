import { StyleSheet } from "react-native";

import { colors, fonts } from '../styles/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  topContainer: {
    height: '60%',
    width: '80%',
    backgroundColor: colors.lightbg,
    marginHorizontal: '10%',
    borderRadius: 30,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 60,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.darkText,
  },
  topImage: { width: 240, height: 240, },
  subtitle: {
    fontFamily: fonts.semibold,
    fontSize: 18,
  },


})

export default styles