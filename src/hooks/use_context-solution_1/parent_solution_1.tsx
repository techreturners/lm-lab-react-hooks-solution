import { useState, createContext } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

export interface Theme {
    backgroundColor: string,
    color: string,
    padding: string,
    margin: string
}

export const ThemeContext = createContext<Theme>({
    backgroundColor: "",
    color: "",
    padding: "",
    margin: ""
})

export const ParentSolution1 = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(true)

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
        <>
        <h1>useContext - solution 1</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemeContext.Provider value={theme}>
            <Child1 />
            <Child2 />
        </ThemeContext.Provider>
        </>

    )
}