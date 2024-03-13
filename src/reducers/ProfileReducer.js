import { actions } from "../actions"

const initialState = {
  user: null,
  blogs: [],
  loading: false,
  error: null,
}

const profileReducer = (state, action) => {
  console.log("🚀 ~ profileReducer ~ action:", action)
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data,
        blogs: action.data.blogs,
      }
    }

    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.data,
      }
    }

    case actions.profile.IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      }
    }

    default: {
      return state
    }
  }
}

export { initialState, profileReducer }
