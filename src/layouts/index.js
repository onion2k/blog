import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Obs from '../components/Obs.js';

import '../css/reset.css';
import '../css/index.css';
import '../css/prismjs-twilight.css';

const Header = () => (
  <nav>
    <a href="https://www.ooer.com/" rel="nofollow noopener">Ooer</a>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Ooer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon.png' }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <article>{children()}</article>
    <Obs />
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
