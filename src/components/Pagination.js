import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Pagination = ({ prevPath, nextPath, page, pagesSum }) =>
    <nav className="blog-section" role="navigation">
      {prevPath ?
        <Link className="blog-section-link newer-posts" to={prevPath}>
          <span aria-hidden="true">←</span> Newer Posts
        </Link> : <Link className="blog-section-link newer-posts" to="/">
          <span aria-hidden="true">←</span> Home
        </Link>}
      {nextPath ?
        <Link className="blog-section-link older-posts" to={nextPath}>
          Older Posts <span aria-hidden="true">→</span>
        </Link> : <span className="blog-section-link newer-posts"></span>}
    </nav>;

export default Pagination;