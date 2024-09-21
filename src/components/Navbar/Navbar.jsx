import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links =<>
         <li className="ml-3"><NavLink to='/' className={({ isActive }) => isActive ? "text-[#1ae63e] btn border-[#1ae63e] bg-transparent hover:bg-transparent hover:border" : " text-black  btn"}>Home</NavLink></li>
            <li className="ml-3"><NavLink to='/listedBooks'  className={({ isActive }) => isActive ? "text-[#1ae63e]  btn border-[#1ae63e] bg-transparent hover:bg-transparent hover:border" : " text-black  btn"}>Listed Book</NavLink></li>
            <li className="ml-3"><NavLink to='/pagesToRead'  className={({ isActive }) => isActive ? "text-[#1ae63e]  btn border-[#1ae63e] bg-transparent hover:bg-transparent hover:border" : " text-black  btn"}>Pages To Read</NavLink></li>
            <li className="ml-3"><NavLink to='about'  className={({ isActive }) => isActive ? "text-[#1ae63e] btn border-[#1ae63e] bg-transparent hover:bg-transparent hover:border" : " text-black  btn"}>About Us</NavLink></li>
            <li className="ml-3"><NavLink to='contact'  className={({ isActive }) => isActive ? "text-[#1ae63e] btn border-[#1ae63e] bg-transparent hover:bg-transparent hover:border" : " text-black  btn"}>Contacts</NavLink></li>
    </>;

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown mx-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
            </ul>
          </div>
          <div className="mr-14 w-full">
          <Link to='/' className="btn btn-ghost text-xl lg:text-2xl text-[#1ae63e] font-bold lg:mx-0">Book-Shop</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {
                    links
                }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
          <Link className="btn btn- bg-[#1ae63e] text-white hover:text-black">Sign In</Link>
          <Link className="btn btn- bg-[#80e8f6] text-white hover:text-black">Sign Up</Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;