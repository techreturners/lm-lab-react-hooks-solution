import React, { useState } from "react";

export const ThemeContext = React.createContext<{
    theme: Theme;
    toggleTheme: () => void;
}>({
    theme: {
        backgroundColor: "",
        color: "",
        padding: "",
        margin: ""
    },
    toggleTheme: () => false
});

export interface Theme {
    backgroundColor: string,
    color: string,
    padding: string,
    margin: string
}

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const theme = {
        backgroundColor: isDarkTheme ? '#333' : '#CCC',
        color: isDarkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme: toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}