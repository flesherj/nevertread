import { configureFonts, DarkTheme } from 'react-native-paper';
import customFonts from './Fonts';

const theme = {
    ...DarkTheme,
    fonts: configureFonts(customFonts),
    roundness: 15,
    colors: {
        ...DarkTheme.colors,
        primary: '#4169E1',
        accent: '#f1c40f',
    },
    post: {
        marginBottom: 8,
    },
};

export default theme;
