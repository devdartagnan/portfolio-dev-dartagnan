import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    title: 'dark',
    palette: {
        colors: {
            primary: '#363537',
            secundary: '#181818',
            background: '#191919',
        },
        textColor: {
            text: '#fafafa',
            borderOpacity01: 'rgb(250, 250, 250, 0.1)',
            textOpacity04: 'rgba(250, 250, 250, 0.4)',
            textOpacity06: 'rgba(250, 250, 250, 0.6)',
            hover: '#f5a1a1',
        }
    },
    fontSizes: {
        small: '16px',
        medium: '24px',
        large: '48px',
    }
};


