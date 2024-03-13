import { useEffect, useState } from "react"
import useAxios from "../../hooks/useAxios"

const Favourites = () => {
  const { api } = useAxios()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [favourites, setFavourites] = useState([])
  console.log("🚀 ~ MostPopular ~ popularBlog:", favourites)
  useEffect(() => {
    setLoading(true)
    const fetchoPularBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
        )
        if (response.status === 200) {
          setFavourites(response.data.blogs)
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
    return <div>Favourites blogs loading...</div>
  }

  if (error) {
    return <div> Error in fatching Favourites {error}</div>
  }
  return (
    <ul className="space-y-5 my-5">
      {favourites.length > 0 ? (
        favourites.map((blog) => {
          return (
            <li key={blog.id}>
              <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-slate-600 text-sm">{blog.tags}</p>
            </li>
          )
        })
      ) : (
        <h3>List not found.</h3>
      )}

      {/* <li>
        <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
          How to Auto Deploy a Next.js App on Ubuntu from GitHub
        </h3>
        <p className="text-slate-600 text-sm">#tailwindcss, #server, #ubuntu</p>
      </li> */}
    </ul>
  )
}

export default Favourites
