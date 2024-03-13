import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

import BlogProvider from "../providers/BlogProvider"
import ProfileProvider from "../providers/ProfileProvider"

const PrivateRoutes = () => {
  const { auth } = useAuth()
  const location = useLocation()
  return (
    <>
      {auth.authToken ? (
        <>
          <BlogProvider>
            <ProfileProvider>
              <main
                className={`${
                  location.pathname === "/" ? "" : "mx-auto max-w-[1020px] py-8"
                }`}
              >
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </ProfileProvider>
          </BlogProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  )
}

export default PrivateRoutes
