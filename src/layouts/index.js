import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../css/index.css';
import '../css/reset.css';

const Header = () => (
  <nav>
    <a className="right" href="https://www.ooer.com/">Ooer</a>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Ooer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <article>{children()}</article>
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
