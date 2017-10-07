import React from 'react';
import Helmet from 'react-helmet';

import '../css/index.css'; // make it pretty!


export default function Tags({ pathContext, data }) {
    const { title, siteUrl } = data.site.siteMetadata;
    const { posts, tag, pagesSum, page } = pathContext;
  
    return (
      <section className="main-content">
        <section className="blog container tags-collection">
          <div className="medium-8 medium-offset-2">
            <header className="header">
              <h1 className="tag-title tag-page-title">
                {tag}
              </h1>
            </header>
            <section className="tag-meta">
              A {posts.length} posts collection
            </section>
  
            <div className="posts">
            { posts
            .map((post) => {
                return (
                    <div className="blog-post-preview" key={post.id} style={{ backgroundImage: post.frontmatter.bg }}>
                        <Link className="blog-post-link" to={post.frontmatter.path}>
                            <h1 className="blog-post-title">{post.frontmatter.title}</h1>
                            <p className="blog-post-date">{post.frontmatter.date}</p>
                            <p className="blog-post-excerpt">{post.excerpt}</p>
                            <p className="blog-post-read-more">Read {post.frontmatter.title}</p>
                        </Link>
                        <a className="blog-post-bg-attribution" href={post.frontmatter.bgLink}>{post.frontmatter.bgTitle} by {post.frontmatter.bgAuthor}</a>
                    </div>
                );
            })
        }
            </div>
          </div>
        </section>
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