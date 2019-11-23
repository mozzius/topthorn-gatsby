import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import styles from '../styles/nav.module.css'
import { PageContext } from '../contexts/Page'

const Dropdown = ({ pages, current }) => {
    return (
        <div className={styles.dropdown}>
            {pages.map((page, i) => {
                return (
                    <Link
                        key={`link-${i}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                        className={current === page.name ? styles.active : null}
                        to={page.url}
                    >
                        {page.name}
                    </Link>
                )
            })}
        </div>
    )
}

const Burger = ({ toggle }) => <button className={styles.hamburger} onClick={toggle}>☰</button>

export const Nav = ({ pages }) => {
    const { currentPage } = useContext(PageContext)

    // get page width
    const [pageWidth, setPageWidth] = useState(0)
    const [isToggled, setToggled] = useState(false)
    const resize = () => { setPageWidth(window.innerWidth) }
    window.addEventListener('resize', resize)
    useEffect(() => {
        resize()
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.nav}>
                    <img className={styles.logo} src={require('../images/Main_Logo_Colour.png')} alt="Topthorn Arena Logo" />
                    <div className={styles.links}>
                        {pageWidth < 600 ? (
                            <Burger toggle={() => setToggled(!isToggled)} />
                        ) : pages.map((page, i) => {
                            return (
                                <Link
                                    className={currentPage === page.name ? styles.active : null}
                                    key={`link-${i}`}
                                    to={page.url}
                                >
                                    {page.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            {isToggled && pageWidth < 600 && <Dropdown pages={pages} current={currentPage} />}
        </>
    )
}