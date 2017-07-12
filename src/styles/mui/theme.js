import spacing from 'material-ui/styles/spacing';
import { fade } from 'material-ui/utils/colorManipulator';
import colors from '../base/colors';

//console.log( 'theme.js - colors = ', JSON.stringify(colors));
export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.blue50,
    primary2Color: colors.blue70,
    primary3Color: colors.grey40,
    accent1Color: colors.teal30,
    accent2Color: colors.grey10,
    accent3Color: colors.grey50,
    textColor: colors.grey90,
    secondaryTextColor: fade(colors.grey90, 0.54),
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey30,
    disabledColor: fade(colors.grey90, 0.3),
    pickerHeaderColor: colors.blue50,
    clockCircleColor: fade(colors.grey90, 0.07),
    shadowColor: colors.blue100
  }
};
