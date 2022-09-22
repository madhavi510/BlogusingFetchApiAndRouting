// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = blogList
  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <div className="blog-item-list-container">
        <img src={imageUrl} className="blog-image" alt={title} />
        <div className="blog-item-details">
          <p className="topic-name">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="blog-author-container">
            <img src={avatarUrl} className="author-image" alt={author} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
