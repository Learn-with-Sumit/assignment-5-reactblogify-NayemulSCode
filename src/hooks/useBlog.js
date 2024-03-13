import { useContext } from "react"

import { BlogContext } from "../context"

export const useBlog = () => {
  return useContext(BlogContext)
}
