import { useRef } from "react"
import { toast } from "react-toastify"
import editIcon from "../../../src/assets/icons/edit.svg"
import { actions } from "../../actions"
import useAxios from "../../hooks/useAxios"
import { useProfile } from "../../hooks/useProfile"
const ProfileImage = () => {
  const { state, dispatch } = useProfile()
  const { api } = useAxios()
  const fileUploaderRef = useRef()

  const handleImageUpload = (event) => {
    event.preventDefault()

    fileUploaderRef.current.addEventListener("change", updateImageDisplay)
    fileUploaderRef.current.click()
  }

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData()
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file)
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/avatar/`,
        formData
      )
      if (response.status === 200) {
        toast.success(response.data.message)
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data.user,
        })
      }
    } catch (error) {
      toast.error(error.message)
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      })
    }
  }

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {state?.user?.avatar ? (
          <img
            className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
              state?.user?.avatar
            }`}
            alt="avatar"
          />
        ) : (
          <div className="avater-img bg-orange-600 text-white">
            <span className="">{state?.user?.firstName?.charAt(0)}</span>
          </div>
        )}
      </div>
      <form id="form" encType="multipart/form-data">
        <button
          className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          onClick={handleImageUpload}
          type="submit"
        >
          <img src={editIcon} alt="Edit" />
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  )
}

export default ProfileImage
