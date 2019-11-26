import React, { useContext, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/Page'
import { Hero } from '../components/Hero'
import { PageContext } from '../contexts/Page'
const iFrameResize = require('iframe-resizer/js/iframeResizer.min.js')

export default () => {
    const { setCurrentPage } = useContext(PageContext)
    setCurrentPage('Events')
    const iframeRef = useRef()
    useEffect(() => {
        iFrameResize({log: false}, iframeRef.current)
    }, [])
    return (
        <>
            <Helmet>
                <title>Topthorn Arena | Events at Topthorn</title>
            </Helmet>
            <Hero image={require('../images/beach.jpg')} height={150} grayscale>
                <h1>Events</h1>
            </Hero>
            <Page>
                <iframe
                    ref={iframeRef}
                    src="https://www.myridinglife.com/RemoteLocationEventList.aspx?LocationID=2400&from=rl"
                    width={'100%'}
                    height={800}
                    frameborder={0}
                    title={'Topthorn Events Calender'}
                />
            </Page>
        </>
    )
}
