import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/hero.module.css'

export const Hero = ({ image, height, full, children }) => {
    const imgHeight = full ? 'calc(100vh - 60px)' : (height || '500px')
    const [offset, setOffset] = useState(60)
    const divRef = useRef()

    const resize = () => {
        const rect = divRef.current.getBoundingClientRect()
        setOffset(rect.top + window.scrollY)
    }
    useEffect(() => {
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
                style={{ backgroundImage: `url(${image})`, height: imgHeight, top: offset }}
            />
            <div ref={divRef} className={styles.content} style={{ height: imgHeight }}>
                {children}
            </div>
        </>
    )
}