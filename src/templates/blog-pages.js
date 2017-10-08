import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Pagination from '../components/Pagination';

export default function Template({
  pathContext, data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { title, description, siteUrl } = data.site.siteMetadata;
    const { posts, page, pagesSum, prevPath, nextPath } = pathContext;
    return (
        <section className="blog container">
            <div className="medium-8 medium-offset-2">
                <div className="posts">

                <Pagination
                    page={page}
                    pagesSum={pagesSum}
                    prevPath={prevPath}
                    nextPath={nextPath}
                />

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

        <Pagination
            page={page}
            pagesSum={pagesSum}
            prevPath={prevPath}
            nextPath={nextPath}
        />
                </div>
            </div>
        </section>
    );
}

export const pagesQuery = graphql`
    query PagesSiteMetadata {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
`;