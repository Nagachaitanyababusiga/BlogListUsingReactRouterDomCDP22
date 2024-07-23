import './index.css'

const BlogItem = props => {
  const {Details} = props
  const {title, description, publishedDate} = Details
  return (
    <li className="lst-itm-cont">
      <div className="lstitmupcont">
        <h3 className="header">{title}</h3>
        <p className="pubDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hrline" />
    </li>
  )
}

export default BlogItem
