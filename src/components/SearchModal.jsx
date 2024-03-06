import searchModalImage from "../assets/blogs/taiulwind-cn-thumb.jpg"
import closeIcon from "../assets/icons/close.svg"
import useModal from "../hooks/useModal"
const SearchModal = () => {
  const { closeModal } = useModal()
  return (
    <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
      {/* <!-- Search --> */}
      <div>
        <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
          Search for Your Desire Blogs
        </h3>
        <input
          type="text"
          placeholder="Start Typing to Search"
          className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
        />
      </div>

      {/* <!-- Search Result --> */}
      <div className="">
        <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
        <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
          <div className="flex gap-6 py-2">
            <img
              className="h-28 object-contain"
              src={searchModalImage}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl font-bold">
                Style your components with TailwindCSS
              </h3>
              {/* <!-- Meta Informations --> */}
              <p className="mb-6 text-sm text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>
            </div>
          </div>

          <div className="flex gap-6 py-2">
            <img
              className="h-28 object-contain"
              src={searchModalImage}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl font-bold">
                Style your components with TailwindCSS
              </h3>
              {/* <!-- Meta Informations --> */}
              <p className="mb-6 text-sm text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>
            </div>
          </div>

          <div className="flex gap-6 py-2">
            <img
              className="h-28 object-contain"
              src={searchModalImage}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl font-bold">
                Style your components with TailwindCSS
              </h3>
              {/* <!-- Meta Informations --> */}
              <p className="mb-6 text-sm text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>
            </div>
          </div>
          <div className="flex gap-6 py-2">
            <img
              className="h-28 object-contain"
              src={searchModalImage}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl font-bold">
                Style your components with TailwindCSS
              </h3>
              {/* <!-- Meta Informations --> */}
              <p className="mb-6 text-sm text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>
            </div>
          </div>
          <div className="flex gap-6 py-2">
            <img
              className="h-28 object-contain"
              src={searchModalImage}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl font-bold">
                Style your components with TailwindCSS
              </h3>
              {/* <!-- Meta Informations --> */}
              <p className="mb-6 text-sm text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          closeModal()
        }}
      >
        <img
          src={closeIcon}
          alt="Close"
          className="absolute right-2 top-2 cursor-pointer w-8 h-8"
        />
      </div>
    </div>
  )
}

export default SearchModal
