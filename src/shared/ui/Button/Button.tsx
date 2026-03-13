import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export const Button = ({ children, onClick, className = '' }: ButtonProps) => (
    <button
        onClick={onClick}
        type="button"
        className={`${styles.btn} ${className}`}
    >
        {children}
    </button>
);
