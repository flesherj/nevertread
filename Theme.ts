import { configureFonts, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import customFonts from './Fonts';

const theme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    fonts: configureFonts(customFonts),
    roundness: 15,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#4169E1',
        accent: '#f1c40f',
    },
    post: {
        marginBottom: 8,
    },
};

export default theme;
