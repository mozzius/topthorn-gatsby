const React = require('react')
const { Layout } = require('./src/components/Layout')
require('./src/styles/base.css')
const { pages } = require('./src/pages/_pages')

exports.wrapPageElement = ({ element, props }) => <Layout pages={pages} {...props}>{element}</Layout>