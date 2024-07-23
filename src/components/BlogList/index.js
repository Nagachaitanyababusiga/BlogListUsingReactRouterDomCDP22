import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="lister">
      {blogsList.map(x => (
        <BlogItem key={x.id} Details={x} />
      ))}
    </ul>
  )
}

export default BlogList
