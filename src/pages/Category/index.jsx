import { Outlet, NavLink } from "react-router-dom";



function Category() {
  return (
    <div className="d-flex align-items-center gap-4 p-5 aside">
    <aside className="d-flex flex-column bg-white p-5 rounded-4">
      <NavLink to="/category/story"> Story</NavLink>
      <NavLink to="/category/novel"> Novel</NavLink>
    </aside>
    {/* Alt elemani [story ve novel] render et */}
    <Outlet/>
    </div>
  )
}

export default Category;