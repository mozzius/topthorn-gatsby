import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/Page'
import { Hero } from '../components/Hero'
import { PageContext } from '../contexts/Page'
import { Maps } from '../components/Maps';

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('Contact')
    return (
        <>
            <Helmet>
                <title>Topthorn Arena | Contact Us</title>
            </Helmet>
            <Hero image={require('../images/beach.jpg')} height={150} grayscale>
                <h1>Contact Us</h1>
            </Hero>
            <Page>
                <h1>Contact Us</h1>
            </Page>
            <Maps height={400} />
        </>
    )
}
