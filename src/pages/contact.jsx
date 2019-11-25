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
                <h2>Contact Details</h2>
                <p>Phone: 07502190829</p>
                <p>Email: topthorn@gmail.com</p>
                <p>Fax: ???</p>
            </Page>
            <Page blue>
                <h3 style={{ textAlign: 'center' }}>Don't forget your horse passport if you're wanting to compete!</h3>
            </Page>
            <Page>
                <h2>Our Address</h2>
                <p>You can find us at Topthorn, Grove Farm, Debenham Road, Stowmarket, Suffolk IP14 6BX</p>
            </Page>
            <Maps height={420} />
        </>
    )
}
