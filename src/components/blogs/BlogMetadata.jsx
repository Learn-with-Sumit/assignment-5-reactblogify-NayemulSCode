import { formatDate } from "../../utils/dateFormat"

const BlogMetadata = ({ blog }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div className="avater-img bg-indigo-600 text-white">
          {blog.author?.avatar ? (
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                blog.author.avatar
              }`}
              alt="author avatar"
            />
          ) : (
            <span className="">{blog.author.firstName?.charAt(0)}</span>
          )}
        </div>
        <div>
          <h5 className="text-slate-500 text-sm">
            {blog.author.firstName} {blog.author.lastName}
          </h5>
          <div className="flex items-center text-xs text-slate-700">
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="flex text-sm px-2 py-1 text-slate-700">
        <span className="mr-5">
          {blog?.comments.length > 0 ? blog?.comments?.length : 0} Comments
        </span>
        <span>{blog?.likes.length > 0 ? blog?.likes?.length : 0} Likes</span>
      </div>
    </div>
  )
}

export default BlogMetadata
