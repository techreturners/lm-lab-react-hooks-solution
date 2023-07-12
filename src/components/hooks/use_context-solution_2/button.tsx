import { useThemeContext } from "./use_theme_context";

export const Button: React.FC = () => {

    const { toggleTheme } = useThemeContext();

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}