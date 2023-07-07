import { useContext } from "react";
import { ThemeContext } from "./theme_context";

export function useThemeContext() {
    return useContext(ThemeContext);
}
