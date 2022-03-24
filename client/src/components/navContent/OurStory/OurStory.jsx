import React from 'react';
import { Link } from 'react-router-dom';
import "./ourstory.css"

import ourstory1 from '../../../img/ourstory1.png';
import ourstory2 from '../../../img/ourstory2.png';

export const OurStory = () => {
    return (
        <div>
        <div className='NavbarDiv' id='our'>
            <div className='BrandImg'>
            <Link to="/"> <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="" /></Link>            
            </div>
            <div className='navopt'>    
            <ul>
              <li><Link className='Linkclass'  to="/signin" ><button id='startwriting' ><h3  style={{paddingBottom:"15px",marginTop:"-4px"}}>Write</h3></button></Link></li>
              <li><div><Link className='ourlink'  to="/signin" >Sign In</Link></div></li>
              <li><div><Link className='ourlink'  to="/write" >Write</Link></div></li>
              <li><div><Link className='ourlink'  to="/membership">Membership</Link></div></li>
              <li><div><Link className='ourlink'  to="/ourstory" >Our Story</Link></div></li> 
            </ul>      
            </div> 
        </div>

        <div className='ourcomp'>
            <div className='ourcomp-a'>
                <p>Every idea needs a <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/wordmark.svg" alt="" />.</p>
            </div>
            <div className='ourcomp-b'>
                <div className='ourcomp-b-1'> 
                <div className='ourcomp-b-1txt'>
                    <p>The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.</p>
                </div>
                <div className='ourcomp-b-1txt'>
                    <p>We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
                </div>
                </div>
                <div className='ourcomp-b-2'>
                    <img src={ourstory1} alt="" />
                </div>                
            </div>
            <div className='ourcomp-c'>
                <div className='ourcomp-c-1'>
                    <p id='ourcomp-c-1-h'>A living network of curious minds.</p>
                    <p>Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p> 
                </div>
                <div className='ourcomp-c-2'>
                    <div className='ourcomp-c-2comp'>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Erica_Dhawan_clip.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Erica Dhawan</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-04_1tri-col-item-04.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Scott Galloway</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-07_1tri-col-item-07.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>OneZero</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart ourcomp-c-2compPart-btm'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SarahCottrell_1SarahCottrell.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Sarah Cottrell</p>
                            </div>
                        </div>
                    </div>
                    <div className='ourcomp-c-2comp'>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/DevonPrice_1DevonPrice.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Devon Price</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Kaki Okumura</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/CarvellWallace_1CarvellWallace.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Carvell Wallace</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart ourcomp-c-2compPart-btm'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-11_1tri-col-item-11.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Forge</p>
                            </div>
                        </div>
                    </div>
                    <div className='ourcomp-c-2comp'>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-03_1tri-col-item-03.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Gen</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart '>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Hal_Harris_clip.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Hal H. Harris</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-09_1tri-col-item-09.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>Elemental</p>
                            </div>
                        </div>
                        <div className='ourcomp-c-2compPart ourcomp-c-2compPart-btm'>
                            <div className='ourcomp-c-2compPartImg'>
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Level_1Level.png" alt="" />
                            </div>
                            <div className='ourcomp-c-2compPartTxt'>
                                <p>LEVEL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ourcomp-d'>
                <div className='ourcomp-d-1'> 
                <p>Over 100 million <br /> readers and growing.</p>
                </div>
                <div className='ourcomp-d-2'>                
                 <div className='ourcomp-d-2img'>
                     <img className='ourcomp-d-2-img' src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Lowry.png" alt="" />
                 </div>
                 <div className='ovelcon'>
                  <div id='ourcomp-d-2ovel'></div>
                 <div id='ourcomp-d-2ovell'></div>
                 </div>
                 <div id='ourcomp-d-2txt'> 
                    <p>
                     "My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known writers alike."
                    </p>
                    <p id='ourcomp-d-2name'>Joseph Coco</p>
                 </div> 
                   
                </div>            
            </div>
            <div className='ourcomp-e'>
                <div className='ourcomp-e-txt'>
                    <p id='ourcomp-e-txt-h'>Create the space for your thinking to take off.</p>
                    <p id='ourcomp-e-txt-p'>A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
                    
                    <button className='ourcop-btn' id='our-A' ><p> Write on Medium </p> </button>
                </div>

            </div>
            <div className='ourcomp-f'>
                <div className='ourcomp-e-txt'>
                    <p id='ourcomp-f-txt-h'>Create the space for your thinking to take off.</p>
                    <p id='ourcomp-f-txt-p'>A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
                    
                    <button className='ourcop-btn' id='our-b' ><p> See membership options </p> </button>
                </div>
            </div>
            <div className='ourcomp-g'>
            <div className='ourcomp-gR' id='bdr'>
                <p className='ourcomp-gR-h'>Read as much as you want.</p>
                 <div className='ourcomp-gR-img'>
                 <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg" alt="" />
                </div>
                 <p className='ourcomp-gR-p'>Enjoy unlimited access to every story across all of your devices.</p>

            </div> 
            <div className='ourcomp-gR'>
               <p className='ourcomp-gR-h'>Reward quality content.</p>
               <div className='ourcomp-gR-img'>
               <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg" alt="" />
               </div>
               <p className='ourcomp-gR-p'>Your membership helps us pay writers, and keeps your experience ad-free.</p>

            </div> 
            </div>

            <div className='ourcomp-h'>
            <div className='ourcomp-hR' >
                <p className='ourcomp-hR-h5'>Take Medium with you.</p>
                <p className='ourcomp-hR-p'>Download our app so you can read, write, and publish wherever you are.</p>
                <div className='ourcomp-h-btn' >
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/AppleStore_2x.png" alt="" />
                </div>
                <div className='ourcomp-h-btn' >
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/PlayStore_2x.png" alt="" />
                </div>                
            </div> 
            <div className='ourcomp-hR'>
                <img id='ourcomp-hRImg' src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_iPhone_screen-p-500.png" alt="" />
               
            </div> 
            </div>
            
            <div className='ourcomp-i'>
                <div className='ourcomp-iL'>
                    <p id='ourcomp-iL-p'>Learn more about us. Or join us.</p>
                </div>
                <div className='ourcomp-iR'>
                    <div className='ourcomp-iR-a'>
                        <div className='ourcomp-iR-txt'>
                            <p className='ourcomp-iR-txt-h'>The Medium blog</p>
                            <p className='ourcomp-iR-txt-p'>Visit our company blog for the latest news, product updates, and tips and tricks.</p>
                        </div>
                        <div className='ourcomp-iR-btn ' id='ourcomp-iR-btn-a'>
                            <p>Read our blog</p>
                        </div>
                    </div>
                    <div className='ourcomp-iR-c'></div>
                    <div className='ourcomp-iR-b'>
                        <div className='ourcomp-iR-txt'>
                            <p className='ourcomp-iR-txt-h'>Work at Medium</p>
                            <p className='ourcomp-iR-txt-p'>Our team is home to engineers, journalists, artists, and creatives of all stripes.</p>
                        </div>
                        <div className='ourcomp-iR-btn' id='ourcomp-iR-btn-b'>
                            <p>View open positions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ourcomp-j'>
                <div className='ourcomp-jL'>
                    <img src={ourstory2} alt="" />
                </div>
                <div className='ourcomp-jR'>
                  <div className='ourcomp-jR-txt'>
                            <p className='ourcomp-jR-txt-j'>Read, write, and expand your world.</p>
                  </div>
                  <div className='ourcomp-jR-btn' id='ourcomp-jR-btn-c'>
                            <p>Get stated</p>
                    </div>
                </div>
                
            </div>
            <div className='ourcomp-k'>
                <div className='ourFooter'>                
                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="" />
                </div>
                <div className='ourFooterLi'>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Help</li>
                </ul>
                </div>
            </div>
        </div>
            
        </div>
    )
};