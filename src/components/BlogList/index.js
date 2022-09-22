// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachBlog => ({
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      id: eachBlog.id,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return isLoading ? (
<div testid="loader">
  <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
</div>
    ) : (
      <div className="blog-list-container">
        {blogList.map(item => (
          <BlogItem blogList={item} key={item.id} />
        ))}
      </div>
    )
  }
}
export default BlogList
