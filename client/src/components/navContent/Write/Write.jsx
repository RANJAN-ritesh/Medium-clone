import React from 'react';
import { Link } from 'react-router-dom';
import "./write.css"
// import "../navbar.css"
import write from '../../../img/write.png';

export const Write = () => {
    return (
    <div>
         <div className='NavbarDiv' id='wri'>
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
        <div className='writeDiv'>
        <div className='writeA'>
            <div className='writeA-a'>
                <div className='writeA-a1'>
                    <p className='writeA-a1-h'>Publish, grow, and earn, all in one place.</p>
                </div>
                <div className='writeA-a2'>
                <p>If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Here, your writing can thrive in a network supported by millions of readers — not ads.</p>


                <div className='writeA-a2-btn'>
                    <p>Start Writing</p>
                </div>
                </div>
            </div>
            <div className='writeA-b'> 
            <img className='writeA-bImg' src={write} alt="" />               
            </div>
        </div>
        <div className='writeB'>
            <p className='writeB-h' >Create your space.</p>
            <p className='writeB-p'>Tell your story your way — with different ways to write, style, and brand your work.</p>
        </div>
        <div className='writeC'>
            <div className='writeC1'>
                <div className='writeC1-a'>
                    <p>Blogs</p>
                </div>
                <div className='writeC1-b'>
                    <p>If you’re an individual writer, your profile is a personalized home for your writing. Brand your space and share your writing with readers who care what you have to say.</p>
                </div>
            </div>
            <div className='writeC2'>
                <img src="https://cdn-static-1.medium.com/sites/medium.com/creator-tools/images/Blog_Desktop-p-1080.png" alt="" />
            </div>                   
        </div>
        <div className='writeD'>
            <div className='writeD1'>
                <div className='writeDtxt'>
                    <p className='writeDtxt-h'>Flexible <br></br> expression.</p>
                    <p className='writeDtxt-p'>Write something short and sweet or long and deep, once a week or once a month.</p>
                </div>
            </div>
            <div className='writeD2'>
                <div className='writeDtxt'>
                    <p className='writeDtxt-h'>Newsletters.</p>
                    <p className='writeDtxt-p'>Reach readers in their inboxes. Gain new subscribers and export them to take wherever you go. Here's how to get started.</p>
                </div>
            </div>
            <div className='writeD3'>
                <div className='writeDtxt'>
                    <p className='writeDtxt-h'>Publications.</p>
                    <p className='writeDtxt-p'>Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options.</p>
                </div>
            </div>
            <div className='writeD4'>
                <div className='writeDtxt'>
                    <p className='writeDtxt-h'>Custom domains.</p>
                    <p className='writeDtxt-p'>Add a custom domain name to your space to help visitors find, share, and return to it.</p>
                </div>
            </div>
        </div>
        <div className='writeE'>
            <p className='writeE-h'>Find and grow your <br></br> audience.</p>
            <p className='writeE-p'>With simple tools and features, you have the chance to connect with <br></br> millions of curious readers.</p>
        </div>
        <div className='writeF'>
        <div className='writeF1'>
                <div className='writeFtxt'>
                    <p className='writeFtxt-h'>Followers.</p>
                    <p className='writeFtxt-p'>Readers who follow you will see your latest writing in their feeds, keeping them up-to-date and engaged with your work.</p>
                </div>
            </div>
            <div className='writeF2'>
                <div className='writeFtxt'>
                    <p className='writeFtxt-h'>Responses.</p>
                    <p className='writeFtxt-p'>Have direct conversations with your audience without leaving your story’s page. Responses are displayed in-context, unifying your writing and the discussions happening around it.</p>
                </div>
            </div>
            <div className='writeF3'>
                <div className='writeFtxt'>
                    <p className='writeFtxt-h'>Connect to Twitter.</p>
                    <p className='writeFtxt-p'>Link your account to Twitter so your network can find and follow you on Medium. You'll also be able to discover other writers you already follow on Twitter. Learn more.</p>
                </div>
            </div>            
        </div>
        <div className='writeG'>
            <div className="writeG-A">
                <img src="https://cdn-static-1.medium.com/sites/medium.com/creator-tools/images/Stats.png" alt="" />
            </div>
            <div className="writeG-B">
                <div className='writeG-h'>
                    <p>Writer Status</p>
                </div>
                <div className='writeG-p'>
                    <p>Built-in analytics let you see what’s working. Dig into the details on every story or view the big picture to learn what resonates and maximize your presence.</p>
                </div>
            </div>
        </div>
        <div className='writeH'>
            <p className='writeH-h'>Earn money from your <br></br> writing.</p>
            <p className='writeH-p'>When you publish on Medium, you can join the Partner Program to earn money by making your stories part of our member-only content. Or you can keep your stories free and accessible to anyone. The choice is yours.</p>

            <div className='writeH-btn'>
                <h6>Learn about the Partner Program</h6>
            </div>
        </div>
        <div className='writeI'>
        <div class="content">
            <div>
              <input type="checkbox" id="question1" name="q"  class="questions"/>
              <div class="plus">+</div>
              <label for="question1" class="question">
              How do I start writing on Medium?
              </label>
              
              <div class="answers">
              First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.” To start a publication, click on your profile picture in the top-right corner of the page, then click “Publications,” then “New publication.”
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question2" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question2" class="question">
              Who writes on Medium?
              </label>
              <div class="answers">
              Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers.
              </div>
            </div>
              
            <div>
              <input type="checkbox" id="question3" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question3" class="question">
              How can I make money writing on Medium?
              </label>
              <div class="answers">
              If you join the Medium Partner Program, you can earn money based on how much time Medium members spend reading your stories.
              </div>
            </div>
            

            <div>
              <input type="checkbox" id="question4" name="q"  class="questions"/>
              <div class="plus">+</div>
              <label for="question4" class="question">
              Do I need to be in the Partner Program to write on Medium?
              </label>
              <div class="answers">
              No. Joining the Partner Program is free, optional, and you can choose to join or leave at any time. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here.
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question5" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question5" class="question">
              Who can read the work I publish on Medium?
              </label>
              <div class="answers">
              Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link.
              </div>
            </div>
              
            <div>
              <input type="checkbox" id="question6" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question6" class="question">
              How can I see how my stories perform?</label>
              <div class="answers">
              Your stats dashboard lets you see how your story is performing and gives you valuable insights into your readers, including where they came from and what they’re interested in, so you can grow your audience.</div>
            </div>

            <div>
              <input type="checkbox" id="question7" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question7" class="question">
              Where I can I get updates and plug into the creator community?
              </label>
              <div class="answers">
              Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link.
              </div>
            </div>
              
            <div>
              <input type="checkbox" id="question8" name="q" class="questions"/>
              <div class="plus">+</div>
              <label for="question8" class="question">
              How can I grow my audience with Medium?</label>
              <div class="answers">
              Your stats dashboard lets you see how your story is performing and gives you valuable insights into your readers, including where they came from and what they’re interested in, so you can grow your audience.</div>
            </div>
        </div> 

            <div className='writeFooter'>
                <ul>
                    <li>About</li>
                    <li>Terms</li>
                    <li>Privcy</li>
                </ul>
            </div> 
        </div>

        </div>


        
    
    
    </div>
  
        
   
    
   
    )
};