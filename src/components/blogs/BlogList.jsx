import { Link } from "react-router-dom"
import BlogCard from "./BlogCard"

const BlogList = ({ blogs }) => {
  return (
    <div className="my-6 space-y-4">
      {blogs?.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <h3>
          You Have No Blog. <Link to="/create">Create Blog</Link>
        </h3>
      )}
    </div>
  )
}

export default BlogList
