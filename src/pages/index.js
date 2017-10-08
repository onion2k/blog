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

          var tags = null;
          if (post.frontmatter.tags) {
            tags = post.frontmatter.tags.split(',').map((tag)=>{
              return <Link to={'tag/'+tag}>{tag}</Link>
            })
          }

          return (
            <div className="blog-post-preview" key={post.id} style={{ backgroundImage: post.frontmatter.bg }}>
              <Link className="blog-post-link" to={post.frontmatter.path}>
                <h1 className="blog-post-title">{post.frontmatter.title}</h1>
                <p className="blog-post-date">{post.frontmatter.date}</p>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-tags">{tags}</div>
                <div className="blog-post-read-more">Read {post.frontmatter.title}</div>
              </Link>
              <a className="blog-post-bg-attribution" href={post.frontmatter.bgLink}>{post.frontmatter.bgTitle} by {post.frontmatter.bgAuthor}</a>
            </div>
          );
        })}

        <div className="blog-section">
          <Link className="blog-section-link" to="/archive/2">
            Older Posts
          </Link>
        </div>

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