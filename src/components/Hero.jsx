import React from 'react'
import styles from '../styles/hero.module.css'

export const Hero = ({ image, height, full, children }) => {
    // assumes it's directly under the navbar
    const imgHeight = full ? 'calc(100vh - 60px)' : (height || '500px')
    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${image})`, height: imgHeight }}
            />
            <div className={styles.content} style={{ height: imgHeight }}>
                {children}
            </div>
        </>
    )
}