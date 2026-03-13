import { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Modal } from '../../shared/ui/Modal/Modal';
import { Button } from '../../shared/ui/Button/Button';
import styles from './Header.module.scss';

function LayoutHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles['header__container']}>
                <h1 className={styles['header__title']}>Мой блог</h1>
                <Button className={styles['header__btn-project']} onClick={() => setIsModalOpen(true)}>О проекте</Button>
                <ThemeSwitcher className={styles['header__theme-switcher-btn']} />
            </div>

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className={styles['modal-content']}>
                        <h2 className={styles['modal__title']}>О проекте</h2>
                        <p className={styles['modal__text']}>
                            Это мой блог, созданный для демонстрации навыков работы с React.
                        </p>
                    </div>
                </Modal>
            )}
        </header>
    );
}

export default LayoutHeader;
