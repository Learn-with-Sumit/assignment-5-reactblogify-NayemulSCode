import { useEffect } from "react"
import { actions } from "../actions"
import BlogList from "../components/blogs/BlogList"
import SideBar from "../components/home/SideBar"
import useAxios from "../hooks/useAxios"
import { useBlog } from "../hooks/useBlog"

const HomePage = () => {
  const { state, dispatch } = useBlog()
  const { api } = useAxios()

  useEffect(() => {
    dispatch({ type: actions.blog.DATA_FETCHING })

    const fetchblog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs?page=${1}&$limit=${10}`
        )
        if (response.status === 200) {
          dispatch({
            type: actions.blog.DATA_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        console.error(error)
        dispatch({
          type: actions.blog.DATA_FETCH_ERROR,
          error: error.message,
        })
      }
    }

    fetchblog()
  }, [])

  if (state?.loading) {
    return <div> We are working...</div>
  }

  if (state?.error) {
    return <div> Error in fatching blogs {state?.error?.message}</div>
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="space-y-3 md:col-span-5">
          <BlogList blogs={state.blogs.blogs} />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default HomePage
