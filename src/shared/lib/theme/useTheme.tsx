import { useContext } from "react";
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('Хук useTheme должен использоваться внутри ThemeProvider');
    }
    return context;
};
