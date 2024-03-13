import { actions } from "../actions"

const initialState = {
  blogs: [],
  loading: false,
  error: null,
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case actions.blog.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actions.blog.DATA_FETCHED: {
      return {
        ...state,
        blogs: action.data,
        loading: false,
      }
    }

    case actions.blog.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    case actions.blog.DATA_CREATED: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data],
      }
    }

    case actions.blog.blog_DELETED: {
      return {
        ...state,
        loading: false,
        blogs: state.blogs.filter((item) => item.id !== action.data),
      }
    }

    case actions.blog.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.data,
      }
    }

    default: {
      return state
    }
  }
}

export { blogReducer, initialState }
