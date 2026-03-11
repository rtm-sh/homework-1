import React from 'react';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;
