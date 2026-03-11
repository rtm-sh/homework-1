import styles from './Header.module.scss';

function LayoutHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles['header__title']}>Мой блог</h1>
        </header>
    );
}

export default LayoutHeader;
