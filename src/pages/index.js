import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PostPreview from '../components/PostPreview';

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">

      <nav className="blog-section">
        <span className="blog-section-link newer-posts"></span>
        <Link className="blog-section-link older-posts" to="/archive/2">Older Posts <span aria-hidden="true">→</span></Link>
      </nav>

      { 
        posts
        .map(({ node: post }) => {
          return (<PostPreview key={post.frontmatter.path} {...post} />);
        })
      }

    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 6, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            bg
            bgLink
            bgTitle
            bgAuthor
          }
        }
      }
    }
  }
`;