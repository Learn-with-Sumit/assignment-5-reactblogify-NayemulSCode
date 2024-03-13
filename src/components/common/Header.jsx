import { Link } from "react-router-dom"
import Search from "../../assets/icons/search.svg"
import Logo from "../../assets/logo.svg"
import { useAuth } from "../../hooks/useAuth"
import useModal from "../../hooks/useModal"
import Logout from "../auth/Logout"
const Header = () => {
  const { openModal } = useModal()
  const { auth } = useAuth()
  // const { state } = useProfile()
  // const user = state?.user ?? auth?.user
  const user = auth?.user
  // console.log("🚀 ~ Header ~ user:", user)

  console.log("🚀 ~ Header ~ auth:", auth)
  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>

        {/* <!-- Actions - Login, Write, Home, Search -->
        <!-- Notes for Developers -->
        <!-- For Logged in User - Write, Profile, Logout Menu -->
        <!-- For Not Logged in User - Login Menu --> */}
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="./createBlog.html"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            {auth?.authToken ? (
              <>
                <li onClick={openModal}>
                  <Link
                    to="#"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img src={Search} alt="Search" />
                    <span>Search</span>
                  </Link>
                </li>
                <Link to="/me" className="flex items-center">
                  {user.avatar ? (
                    <div className="avater-img bg-orange-600 text-white">
                      <img
                        className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
                        src={`${
                          import.meta.env.VITE_SERVER_BASE_URL
                        }/uploads/avatar/${user.avatar}`}
                        alt="avatar"
                      />
                    </div>
                  ) : (
                    <div className="avater-img bg-orange-600 text-white">
                      <span className="">{user.firstName?.charAt(0)}</span>
                    </div>
                  )}

                  {/* <!-- Logged-in user's name --> */}
                  <span className="text-white ml-2">{`${user?.firstName} ${user?.lastName}`}</span>
                  {/* <!-- Profile Image --> */}
                </Link>
                <Logout />
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  {" "}
                  Login{" "}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
