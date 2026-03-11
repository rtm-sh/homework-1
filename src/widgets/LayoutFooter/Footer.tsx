import styles from './Footer.module.scss';

function LayoutFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles['footer__copyright']}>
                © {currentYear} Мой Блог. Все права защищены.
            </p>
        </footer>
    );
}

export default LayoutFooter;
