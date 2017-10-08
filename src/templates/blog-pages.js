import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Pagination from '../components/Pagination';
import PostPreview from '../components/PostPreview';

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

                { 
                    posts
                        .map((post) => {
                            return (<PostPreview key={post.frontmatter.path} {...post} />);
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