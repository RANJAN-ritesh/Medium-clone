import React from 'react';
import { Link } from 'react-router-dom';
import "./Membership.css"
// import "../navbar.css"

export const MemberShip = () => {
    return (
    <div>

<div className='NavbarDiv' id='mem'>
            <div className='BrandImg'>
            <Link to="/"> <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="" /></Link>            
            </div>
            <div className='navopt'>    
            <ul>
            <li><Link className='Linkclass'  to="/signin" ><button id='startwriting' ><h3  style={{paddingBottom:"15px",marginTop:"-4px"}}>Write</h3></button></Link></li>
              <li><div><Link className='Linkclass' to="/signin" >Sign In</Link></div></li>
              <li><div><Link className='Linkclass' to="/write" >Write</Link></div></li>
              <li><div><Link className='Linkclass' to="/membership">Membership</Link></div></li>
              <li><div><Link className='Linkclass' to="/ourstory" >Our Story</Link></div></li> 
            </ul>      
            </div> 
</div>

         
    
      <div className='Memcop'>
        <div className='Memcop1'>
            <h2>Fuel great thinking.</h2>
            <h4>Upgrade to membership for $5/month or $50/year.</h4>
            <button className='Memcop1-btn' ><h3> Get unlimited access </h3> </button>
        </div>

            <div className='Memcop2'>
            <div className='Memcop2R' id='bdr'>
                <h2>Get unlimited access to every story.</h2>
                 <div className='Memcop2R-img'>
                 <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg" alt="" />
                </div>
                 <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>

            </div> 
            <div className='Memcop2R'>
               <h2>Support the voices you want to hear more from.</h2>
               <div className='Memcop2R-img'>
               <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg" alt="" />
               </div>
               <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>

            </div> 
            </div>
           

            <div className='Memcop3'>
               <div className='Memcop3A'>
               <h2>Why I'm a Medium Member...</h2>
               <div className='Memcop3B'>
                 <div className='Memcop3C'>
                     <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Lowry.png" alt="" />
                 </div>
                 <div id='ovel'></div>
                 <div id='ovell'></div>
                 <div id='Memcop3txt'>
                    <p>
                     "My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known writers alike."
                    </p>

                    <p id='name'>Joseph Coco</p>
                 </div>                 
               </div>
               </div>
            </div>

            <div className='Memcop4'>
                <p>Take your mind <br></br>in new directions.</p>                
                <button id='getstart' ><Link className='Linkclass'  to="/signin" ><h3>Get unlimited access</h3></Link></button>
                <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" alt="" />                
            </div>

            <div className='Memcop5'>
                <div className='Memcop5Img'>
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Medium-Logo-Black-RGB-1.svg" alt="" />
                </div>
                <div className='MemcopFtH'>
                <h3>Every idea needs a Medium</h3>
                </div>
                <div className='MemcopFtLi'>
                <ul>
                        <li> <Link to="/ourstory">About</Link></li>
                        <li> <Link to="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f">Terms</Link></li>
                        <li> <Link to="https://policy.medium.com/medium-privacy-policy-f03bf92035c9">Privacy</Link></li>
                        <li> <Link to="https://help.medium.com/hc/en-us">Help</Link></li>
                    </ul>
                </div>
               
            </div>
     </div>
    </div>
    )
};