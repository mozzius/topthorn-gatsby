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
                <title>Topthorn Arena</title>
            </Helmet>
            <Hero image={require('../images/beach.jpg')} height={500} />
            <Page>
                <h1>Home</h1>
            </Page>
        </>
    )
}
