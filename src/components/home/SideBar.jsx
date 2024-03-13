import Favourites from "./Favourites"
import MostPopular from "./MostPopular"

const SideBar = () => {
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <div className="sidebar-card">
        <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
          Most Popular 👍️
        </h3>
        <MostPopular />
      </div>

      <div className="sidebar-card">
        <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
          Your Favourites ❤️
        </h3>
        <Favourites />
      </div>
    </div>
  )
}

export default SideBar
