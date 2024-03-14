import BlogHeader from "./BlogHeader"
import BlogMetadata from "./BlogMetadata"
import BlogShortDescription from "./BlogShortDescription"

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img
        className="blog-thumb"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${
          blog.thumbnail
        }`}
        alt=""
      />
      <div className="mt-2 relative">
        <BlogHeader blog={blog} />
        <BlogShortDescription blog={blog} />
        <BlogMetadata blog={blog} />
      </div>
    </div>
  )
}

export default BlogCard
