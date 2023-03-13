import 'styled-components';
interface PaletteColors {
    primary: string;
    secundary: string;
    background: string;
}
interface PaletteText {
    text: string;
    borderOpacity01: string,
    textOpacity04: string;
    textOpacity06: string;
    hover: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        palette: {
            colors: PaletteColors;
            textColor: PaletteText;
        };
        fontSizes: {
            small: string;
            medium: string;
            large: string;
        };
    }
}