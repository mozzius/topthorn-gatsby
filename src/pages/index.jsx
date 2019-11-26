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
            <Hero image={require('../images/beach.jpg')} height={420} grayscale>
                <h1>Topthorn Arena</h1>
                <p>Suffolk's #1 Equestrian Center with indoor and outdoor arenas</p>
            </Hero>
            <Page>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam nesciunt accusamus expedita id alias, tenetur quas beatae aspernatur veniam ipsa quisquam quam, debitis odit eligendi quos optio odio itaque?</p>
            </Page>
            <Page blue>
                <h3>The cafe serves cheesy chips!</h3>
            </Page>
            <Page>
                <h1>Events and Clubs</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nulla, fuga perspiciatis voluptatem aliquid dicta ad consectetur asperiores sequi laudantium aperiam aspernatur, nesciunt necessitatibus. Veritatis aspernatur iusto dignissimos ab illum.</p>
            </Page>
            <Hero image={require('../images/beach.jpg')} height={300} />
            <Page>
                <h1>Lots of horses</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero recusandae autem neque, eius illo, tempora eligendi rem saepe, nam officiis ullam aut suscipit. Dignissimos eveniet, perferendis illo necessitatibus illum itaque.</p>
            </Page>
        </>
    )
}
