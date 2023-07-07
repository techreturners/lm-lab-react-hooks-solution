import { useThemeContext } from "./use_theme_context"

export const Child1: React.FC = () => {
    
    const { theme } = useThemeContext()

    return (
        <>
            <div style={theme}>Child 1 </div>
        </>
    )
}