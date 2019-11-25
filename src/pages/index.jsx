import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/Page'
import { Hero } from '../components/Hero'
import { PageContext } from '../contexts/Page'

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('Home')
    return (
        <>
            <Helmet>
                <title>Topthorn Arena | Suffolk's #1 Equestrian Center</title>
            </Helmet>
            <Hero image={require('../images/beach.jpg')} height={500} grayscale>
                <h1>Topthorn Arena</h1>
                <p>Suffolk's #1 Equestrian Center with indoor and outdoor arenas</p>
            </Hero>
            <Page>
                <h1>Home</h1>
            </Page>
        </>
    )
}
