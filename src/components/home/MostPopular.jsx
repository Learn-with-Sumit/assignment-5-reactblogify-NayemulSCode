import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"

const MostPopular = () => {
  const { api } = useAxios()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [popularBlog, setPopularBlog] = useState([])
  useEffect(() => {
    setLoading(true)
    const fetchoPularBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular?$limit=${5}`
        )
        if (response.status === 200) {
          setPopularBlog(response.data.blogs)
          setLoading(false)
        }
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchoPularBlog()
  }, [])

  if (loading) {
    return <div>Popular data loading...</div>
  }

  if (error) {
    return <div> Error in fatching popular blogs {error}</div>
  }
  return (
    <ul className="space-y-5 my-5">
      {popularBlog?.length ? (
        popularBlog.map((blog) => {
          return (
            <li key={blog.id}>
              <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-slate-600 text-sm">
                by
                <Link href="/me">
                  {blog.author.firstName} {blog.author.lastName}
                </Link>
                <span>·</span> {blog.likes.length > 0 ? blog.likes.length : 0}{" "}
                Likes
              </p>
            </li>
          )
        })
      ) : (
        <h3>Popular list not found.</h3>
      )}
    </ul>
  )
}

export default MostPopular
