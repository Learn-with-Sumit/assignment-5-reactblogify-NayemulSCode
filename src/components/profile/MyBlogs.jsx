import { Fragment } from "react"
import { useProfile } from "../../hooks/useProfile"
import BlogList from "../blogs/BlogList"

const MyBlogs = () => {
  const { state } = useProfile()
  const blogs = state?.blogs
  return (
    <Fragment>
      {" "}
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <BlogList blogs={blogs} />
    </Fragment>
  )
}

export default MyBlogs
