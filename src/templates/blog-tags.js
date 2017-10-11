import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PostPreview from '../components/PostPreview';

export default function Tags({ pathContext, data }) {

    const { title, siteUrl } = data.site.siteMetadata;
    const { posts, tag, pagesSum, page } = pathContext;
  
    return (
        <section>
            <nav className="blog-section">
                <span className="blog-section-link">
                    Tag / {tag}
                </span>
            </nav>

            <div className="posts">
            { 
                posts
                    .map((post) => {
                        return (<PostPreview key={post.frontmatter.path} {...post} />);
                    })
            }
            </div>
        </section>
    );
  }
  
  export const tagsQuery = graphql`
    query TagsSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `;