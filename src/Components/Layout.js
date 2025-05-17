import { Outlet, Link} from "react-router-dom";

const Layout = ({city}) => {
    return (  
    <>
   <div>
           <nav className="navBar">
           <ul>
               <li>
                   <Link to='/'>Today</Link >
               </li>
               <li>
                   <Link to={`/hourly/${city}`}>Hourly </Link>
               </li>
               <li>
                   <Link to={`/daily-reports/${city}`}>Daily</Link>
               </li>
           </ul>
       </nav> 
       </div>
    <Outlet />
    </>
    );
}
 
export default Layout;