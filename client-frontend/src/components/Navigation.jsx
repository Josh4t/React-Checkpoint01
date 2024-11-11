import {Link, NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    
        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link to="/" className="flex items-center justify-center">
          <img src="/svgs/buy.svg" alt="Ooja logo" width={75} />
          <span className="font-goldman font-extrabold text-primary text-4xl">Ooja</span>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> About </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Careers </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> History </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Services </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Projects </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Blog </NavLink>
            </li>
            <li>
              <button className="bg-primary text-tertiary py-2 px-4 rounded-md font-bold transition-all ease-linear duration-150 hover:bg-secondary">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

  )
}

export default Navigation