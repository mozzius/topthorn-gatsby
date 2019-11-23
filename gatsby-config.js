module.exports = {
    siteMetadata: {
        title: 'Topthorn Arena'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Topthorn Arena',
                short_name: 'Topthorn',
                start_url: '/',
                icon: 'src/images/Horse_Logo.jpg'
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Open Sans`,
                    `Merriweather`
                ],
                display: 'swap'
            }
        }
    ]
};
