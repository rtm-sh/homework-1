import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return createPortal(
        <div
            className={styles.modalOverlay}
            onClick={onClose}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <Button onClick={onClose}>Закрыть</Button>
                {children}
            </div>
        </div>,
        document.body
    );
};
