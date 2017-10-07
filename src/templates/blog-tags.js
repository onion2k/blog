import React from 'react';
import Helmet from 'react-helmet';

import '../css/index.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container" style={{ backgroundImage: post.frontmatter.bg }}>
      <Helmet title={`Ooer - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
    query BlogPostByTags($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              bg
            }
        }
    }
`
;