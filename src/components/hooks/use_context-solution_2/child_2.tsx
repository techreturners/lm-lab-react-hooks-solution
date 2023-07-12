import { useThemeContext } from "./use_theme_context"

export const Child2: React.FC = () => {

    const { theme } = useThemeContext()

    return (
        <>
            <div style={theme}>Child 2 </div>
        </>
    )
}