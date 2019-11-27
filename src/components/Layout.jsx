import React, { useState, useMemo } from 'react'
import { Nav } from './Nav'
import {Footer} from './Footer'
import styles from '../styles/page.module.css'
import { PageContext } from '../contexts/Page'

export const Layout = ({ pages, children }) => {
    const [currentPage, setCurrentPage] = useState(null);
    const value = useMemo(() => ({ currentPage, setCurrentPage }), [currentPage, setCurrentPage]);

    return (
        <div className={styles.app}>
            <PageContext.Provider value={value}>
                <Nav pages={pages} />
                {children}
                <Footer />
            </PageContext.Provider>
        </div>
    )
}