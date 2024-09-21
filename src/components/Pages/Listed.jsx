import { createContext, useState } from "react";
import secondBanner from "/Projects/Book-shop/src/assets/secondBanner.jpg";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";


export const shortContext = createContext();

const Listed = () => {
  const books =useLoaderData()
  const [tabIndex, setTabIndex] = useState(0);
  const [shortValue,setShortValue] = useState([])


  const handelFilter = filter =>{
  setShortValue(filter)
  }

  return (
    <div>
      <div className="relative w-full mt-2 mb-5">
        <img className="w-full h-96 object-cover rounded-md" src={secondBanner} alt="" />
        <div className="absolute inset-0 bg-black opacity-45 rounded-md">
          <h3></h3>
        </div>
      </div>

      {/* TABS  */}
      <div className="container flex items-center justify-evenly py-6">
        <div role="tablist" className="tabs tabs-lifted">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`tab text-black text-2xl mr-3 ${tabIndex === 0 ? "tab-active" : ""}`}
          >
            ReadBook
          </Link>
          <Link
            to={"wishList"}
            onClick={() => setTabIndex(1)}
            className={`tab text-2xl text-black  ${tabIndex === 1 ? "tab-active" : ""}`}
          >
            WishList
          </Link>
        </div>

        {/* Short By  */}
        <div className="flex">
          <details className="dropdown">
            <summary className="btn m-1 w-full text-base lg:text-2xl font-medium bg-[#80e8f6] ">Short By
            <AiFillCaretDown />
            </summary>
            
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className="btn my-2" onClick={()=>handelFilter('rating')}>Number of Rating</li>
              <li className="btn my-2" onClick={()=>handelFilter('year')}>Publishing Year</li>
              <li className="btn my-2" onClick={()=>handelFilter('page')}>Number of Page</li>
            </ul>
          </details>
        </div>
      </div>

      <div>
        <shortContext.Provider value={shortValue}>
            <Outlet></Outlet>
        </shortContext.Provider>
      </div>
    </div>
  );
};

export default Listed;
