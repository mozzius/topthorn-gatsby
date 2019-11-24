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
            <Page>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ratione enim, obcaecati praesentium ipsa dolorum debitis, optio fugiat, voluptatum minus doloribus incidunt rem id alias similique quasi vero exercitationem officiis.</h1>
            </Page>
            <Hero image={require('../images/beach.jpg')} height={500}>
                <h1>Topthorn</h1>
            </Hero>
            <Page>
                <h1>Home</h1>
            </Page>
        </>
    )
}
