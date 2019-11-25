import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/Page'
import {Hero} from '../components/Hero'
import { PageContext } from '../contexts/Page'

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('Events')
    return (
        <>
            <Helmet>
                <title>Topthorn Arena | Events at Topthorn</title>
            </Helmet>
            <Hero image={require('../images/beach.jpg')} height={150} grayscale>
                <h1>Events</h1>
            </Hero>
            <Page>
                HorseMonkey or whatever goes here
            </Page>
        </>
    )
}
