import React from 'react';
import styles from '../styles/page.module.css'

export const Page = ({ blue, children }) => {
    if (blue) {
        return (
            <div className={styles.blue}>
                <div className={styles.page}>{children}</div>
            </div>
        )
    } else {
        return <div className={styles.page}>{children}</div>
    }
}
