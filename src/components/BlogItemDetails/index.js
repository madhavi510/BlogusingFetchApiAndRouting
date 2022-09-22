// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogList: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogList: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogList, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogList

    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blogDetails-container">
        <h1 className="blog-content">{title}</h1>

        <div className="blog-author">
          <img src={avatarUrl} className="author-image" alt={author} />
          <p className="author-name">{author}</p>
        </div>
        <img className="blogDetails-image" src={imageUrl} alt={title} />
        <p className="content-blog">{content}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="blogDetails-container">
        {this.renderBlogItemDetails()}
      </div>
    )
  }
}
export default BlogItemDetails
