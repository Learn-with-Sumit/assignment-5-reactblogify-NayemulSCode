import { useState } from "react"
import { toast } from "react-toastify"
import { actions } from "../../actions"
import ThreeDotsIcon from "../../assets/icons/3dots.svg"
import DeleteIcon from "../../assets/icons/delete.svg"
import EditIcon from "../../assets/icons/edit.svg"
import { useAuth } from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useBlog } from "../../hooks/useBlog"
const BlogHeader = ({ blog }) => {
  const [showAction, setShowAction] = useState(false)
  const { auth } = useAuth()
  const isMe = blog?.author?.id == auth?.user?.id
  const { dispatch } = useBlog()
  const { api } = useAxios()

  function toggleAction() {
    setShowAction(!showAction)
  }

  const handleDeleteblog = async (event) => {
    dispatch({ type: actions.blog.DATA_FETCHING })

    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blog.id}`
      )

      if (response.status === 200) {
        toast.success(response.data.message)
        dispatch({
          type: actions.blog.blog_DELETED,
          data: blog.id,
        })
      }
    } catch (error) {
      toast.error(error.message)
      dispatch({
        type: actions.blog.DATA_FETCH_ERROR,
        error: response.error,
      })
    }
  }
  return (
    <div className="flex justify-between">
      <h3 className="text-slate-300 text-xl lg:text-2xl">{blog?.title}</h3>
      <div className="relative">
        {isMe && (
          <button onClick={toggleAction}>
            <img src={ThreeDotsIcon} alt="3dots of Action" />
          </button>
        )}

        {showAction && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button
              className="action-menu-item hover:text-red-500"
              onClick={handleDeleteblog}
            >
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogHeader
