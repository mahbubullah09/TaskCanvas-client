import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1">
        
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#011aff] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0" : ""
  }
>
  Home
</NavLink>
        
      </ul>
      <ul className="py-1">
        <a
          href="#about"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
         About
        </a>
      </ul>


      <ul className="py-1">
      <a
          href="#skill"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Contact us</a>
      </ul>

      <ul className="py-1">
      <a
          href="#project"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Dashboard</a>
      </ul>
      
    </div>
  );
  return (
    <div>
      <div className="bg-white z-50">
        <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto   ">
          <div className="navbar-start ">
           <a href="#home">
           <h2 className="bg-[#272770]  text-white rounded-full px-4 py-1 text-center "> Task<span className="text-[#ffd900] font-bold text-xl" >Canvas</span></h2>
           </a>
          </div>
          <div className="navbar-center hidden lg:flex   rounded-full">
            <ul className="menu menu-horizontal px-4 "></ul>
          </div>
          <div className="navbar-end ">
            <div className="hidden lg:flex">{navlink}</div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul tabIndex="0" className="menu  dropdown-content z-10 shadow bg-base-100 rounded-box w-52 ms-auto">
                {navlink}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
