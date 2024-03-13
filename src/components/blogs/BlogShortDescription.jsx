import { truncateContent } from "../../utils/contentTcat"

const BlogShortDescription = ({ blog }) => {
  return (
    <p className="mb-6 text-base text-slate-500 mt-1">
      {truncateContent(blog.content, 200)}
    </p>
  )
}

export default BlogShortDescription
