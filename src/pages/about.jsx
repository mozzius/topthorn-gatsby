import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/Page'
import { PageContext } from '../contexts/Page'

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('About Us')
    return (
        <>
            <Helmet>
                <title>Topthorn Arena</title>
            </Helmet>
            <Page>
                <h1>About</h1>
            </Page>
        </>
    )
}
