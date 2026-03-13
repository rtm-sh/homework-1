import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from '../../../shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={`${styles['theme-switcher-btn']} ${className}`}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </Button>
    );
};
