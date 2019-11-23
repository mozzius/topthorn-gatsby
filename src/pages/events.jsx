import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageContext } from '../contexts/Page'

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('Events')
    return (
        <>
            <Helmet>
                <title>Topthorn Arena</title>
            </Helmet>
            <div>Events</div>
        </>
    )
}
