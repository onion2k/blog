import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export default function Template({
  context,
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div>
      <Helmet title={`Ooer - ${post.frontmatter.title}`} />
      <nav className="blog-section">
        <Link className="blog-section-link newer-posts" to="/"><span aria-hidden="true">←</span> Home</Link>
        <span className="blog-section-link older-posts"></span>
      </nav>

      <div className="blog-post-container" style={{ backgroundImage: post.frontmatter.bg }}>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

      <nav className="blog-section">
        <Link className="blog-section-link newer-posts" to="/"><span aria-hidden="true">←</span> Home</Link>
        <span className="blog-section-link older-posts"></span>
      </nav>

    </div>
  );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
              bg
            }
        }
    }
`
;