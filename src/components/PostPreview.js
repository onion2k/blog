import React from 'react';
import Link from 'gatsby-link';

export default class PostPreview extends React.Component {

    render(){

        let post = this.props;

        var tags = null;
        if (post.frontmatter.tags) {
          tags = post.frontmatter.tags.split(',').map((tag)=>{
            return <Link key={tag} to={'tag/'+tag}>{tag}</Link>
          })
        }

        return (
          <div className="blog-post-preview" key={post.frontmatter.path} style={{ backgroundImage: post.frontmatter.bg }}>
            <div className="blog-post-link">
              <Link to={post.frontmatter.path} className="blog-post-title">{post.frontmatter.title}</Link>
              <p className="blog-post-date">{post.frontmatter.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <div className="blog-post-tags">{tags}</div>
              <Link to={post.frontmatter.path} className="blog-post-read-more">Read {post.frontmatter.title}</Link>
            </div>
            <a className="blog-post-bg-attribution" href={post.frontmatter.bgLink}>{post.frontmatter.bgTitle} by {post.frontmatter.bgAuthor}</a>
          </div>
        );
      }

}
