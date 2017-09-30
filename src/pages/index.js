import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/index.css'; // add some style if you want!

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      { posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id} style={{ backgroundImage: 'url('+post.frontmatter.bg+')'}}>
              <Link to={post.frontmatter.path}>
                <h1 className="blog-post-title">
                  {post.frontmatter.title}
                </h1>
                <p className="blog-post-date">{post.frontmatter.date}</p>
                <p className="blog-post-excerpt">{post.excerpt}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            bg
          }
        }
      }
    }
  }
`;