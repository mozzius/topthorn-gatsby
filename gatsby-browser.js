const React = require('react')
const { Layout } = require('./src/components/Layout')
const { pages } = require('./src/pages/_pages')
require('./src/styles/base.css')

exports.wrapPageElement = ({ element, props }) => <Layout pages={pages} {...props}>{element}</Layout>