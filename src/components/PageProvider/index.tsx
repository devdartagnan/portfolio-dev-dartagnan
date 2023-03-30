import { ThemeProvider } from "@mui/material"
import { useTheme } from "next-themes";
import { ReactNode } from "react"
import { darkTheme, defaultTheme } from '../../styles/themes/themes';
import { useState, useEffect } from 'react'

interface PageProps {
    children: ReactNode
}

export default function PageProvider({ children }: PageProps) {
    const { resolvedTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState(darkTheme)
    useEffect(() => {  
        resolvedTheme === 'light'
        ? setCurrentTheme(defaultTheme)
        : setCurrentTheme(darkTheme)
    }, [resolvedTheme])

    return (
        <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    )
}
