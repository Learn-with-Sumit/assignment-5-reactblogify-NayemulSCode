import { useState } from "react"
import { toast } from "react-toastify"
import { actions } from "../../actions"
import EditIcon from "../../assets//icons/edit.svg"
import useAxios from "../../hooks/useAxios"
import { useProfile } from "../../hooks/useProfile"
const Bio = () => {
  const { state, dispatch } = useProfile()
  const { api } = useAxios()

  const [bio, setBio] = useState(state?.user?.bio)
  const [editMode, setEditMode] = useState(false)
  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING })

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile`,
        { bio }
      )
      if (response.status === 200) {
        toast.success(response.data.message)
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data.user,
        })
      }
      setEditMode(false)
    } catch (err) {
      toast.error(err.message)
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: err.message,
      })
    }
  }
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 rounded bg-orange-600 text-white px-3"
          onClick={handleBioEdit}
        >
          Submit
        </button>
      )}
    </div>
  )
}

export default Bio
