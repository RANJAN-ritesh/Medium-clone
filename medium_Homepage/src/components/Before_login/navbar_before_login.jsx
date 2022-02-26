import { Link } from "react-router-dom"

export const NavbarBeforeLogin = ()=>{
    return(
        <div className='NavbarDiv' id='mem'>
            <div className='BrandImg'>
            <Link to="/"> <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="" /></Link>            
            </div>
            <div className='navopt'>    
            <ul>
              <li><button id='startwriting' ><Link className='Linkclass'  to="/signin" ><h3>Start Writing</h3></Link></button></li>
              <li><div><Link className='Linkclass' to="/signin" >Sign In</Link></div></li>
              <li><div><Link className='Linkclass' to="/write" >Write</Link></div></li>
              <li><div><Link className='Linkclass' to="/membership">Membership</Link></div></li>
              <li><div><Link className='Linkclass' to="/ourstory" >Our Story</Link></div></li> 
            </ul>      
            </div> 
</div>
    )
}