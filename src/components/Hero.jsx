import React, { useRef, useLayoutEffect, useState } from 'react'
import styles from '../styles/hero.module.css'

export const Hero = ({ image, height, full, grayscale, children }) => {
    const imgHeight = full ? 'calc(100vh - 75px)' : (height || '500px')
    const [offset, setOffset] = useState(75)
    const divRef = useRef()

    const resize = () => {
        const rect = divRef.current.getBoundingClientRect()
        setOffset(rect.top + window.scrollY)
    }
    useLayoutEffect(() => {
        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${image})`, height: imgHeight, top: offset, filter: grayscale ? 'grayscale(0.5) brightness(0.5)' : null }}
            />
            <div ref={divRef} className={styles.content} style={{ height: imgHeight }}>
                {children}
            </div>
        </>
    )
}