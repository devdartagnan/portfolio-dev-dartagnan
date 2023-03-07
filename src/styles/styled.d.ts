import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            background: string;
            text: string;
            borderOpacity01: string,
            textOpacity04: string;
            textOpacity06: string;
        };
        fontSizes: {
            small: string;
            medium: string;
            large: string;
        }
    }

    export interface CustomTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            background: string;
            text: string;
        };
    }
}